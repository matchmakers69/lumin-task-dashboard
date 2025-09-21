import { Modal, Spinner } from "@/components/ui";
import type { Task } from "../types/task";
import Tasks from "./Tasks";
import TaskItem from "./TaskItem";
import { Box, Button, Container, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearCacheButton from "./ClearCacheButton";
import { useEffect } from "react";
import { useTasks } from "../hooks";
import { areDependenciesCompleted, getReadyToStartTasks } from "../utils/taskUtils";
import ReadyTasks from "./ReadyTasks";
import { useFeatureSwitcher } from "@/hooks";
import AddTaskForm from "./AddTaskForm";
import TaskSnackbar from "./TaskSnackbar";

const TaskDashboard = () => {
	const { tasksResult, setCachedTasks, setTasksResult, snackbar, setSnackbar } = useTasks();
	const modalFeature = useFeatureSwitcher();

	const clearCacheAndReload = (): void => {
		setCachedTasks(null);
		window.location.reload();
	};

	// Update cache whenever tasks change
	useEffect(() => {
		if (tasksResult.is === "ok") {
			setCachedTasks(tasksResult.tasks);
		}
	}, [tasksResult, setCachedTasks]);

	const getCurrentTasks = (): Task[] => {
		return tasksResult.is === "ok" ? tasksResult.tasks : [];
	};

	// Can we click on the button? - Can task can go to the next stage
	const canAdvanceTask = (task: Task): boolean => {
		if (task.status === "COMPLETED") return false; // Task finished - you cannot click
		if (task.status === "IN_PROGRESS") return true; // You can click - it is in progress
		return areDependenciesCompleted(getCurrentTasks(), task.name); // If task is waiting (PENDING) - check if dependencies are ready - Task PENDING can start only if dependencies are completed
	};

	const handleProgressTask = (taskName: string): void => {
		// Check if we have tasks loaded
		if (tasksResult.is !== "ok") return;

		// Find the task we want to change
		const taskToChange = tasksResult.tasks.find((task) => task.name === taskName);
		if (!taskToChange) return;

		// Check what the next status should be
		let newStatus: Task["status"];
		if (taskToChange.status === "PENDING") {
			// Can we start this task? Let's check dependencies first
			const canStart = areDependenciesCompleted(getCurrentTasks(), taskName);
			if (!canStart) {
				setSnackbar({
					open: true,
					message: `Cannot start "${taskName}" - dependencies not completed`,
					severity: "error",
				});
				return; // Do not change anything
			}
			newStatus = "IN_PROGRESS";
		} else if (taskToChange.status === "IN_PROGRESS") {
			newStatus = "COMPLETED";
		} else {
			return;
		}

		// Create updated task list with new status
		const updatedTasks = tasksResult.tasks.map((task) => {
			if (task.name === taskName) return { ...task, status: newStatus };
			return task;
		});

		// Save updated tasks
		setTasksResult({ is: "ok", tasks: updatedTasks });
	};

	// Logic for adding new task
	const handleAddTask = (name: string, deps: string[]): void => {
		if (tasksResult.is !== "ok") return;

		const trimmedName = name.trim();
		if (!trimmedName) {
			setSnackbar({ open: true, message: "Task name cannot be empty", severity: "error" });
			return;
		}

		if (tasks.some((t) => t.name === trimmedName)) {
			setSnackbar({ open: true, message: "Task with this name already exists", severity: "error" });
			return;
		}

		const task: Task = {
			name: trimmedName,
			status: "PENDING",
			dependencies: deps,
		};
		setTasksResult({ is: "ok", tasks: [...(tasksResult.tasks || []), task] });
		setSnackbar({ open: true, message: "Task added successfully", severity: "success" });
		setTimeout(() => {
			modalFeature.off();
		}, 1000);
	};

	const handleCloseSnackbar = (): void => {
		setSnackbar((s) => ({ ...s, open: false }));
	};

	if (tasksResult.is === "idle" || tasksResult.is === "busy") return <Spinner />;
	if (tasksResult.is === "fail")
		// This situation will not occur in this app - I only use fake API
		return (
			<Box>
				<Typography variant="h5" fontWeight="600" color="text.primary" mb={1}>
					Failed to Load Tasks
				</Typography>
			</Box>
		);

	const tasks = getCurrentTasks();
	const readyTasks = getReadyToStartTasks(tasks);

	return (
		<>
			<Container sx={{ py: 8 }} fixed>
				<Box component={"header"} sx={{ mb: 2 }}>
					<Typography variant="h1">Task Dashboard</Typography>
					<Typography variant="h2" gutterBottom>
						Manage your workflow tasks with dependency tracking
					</Typography>
				</Box>
				<Box sx={{ mb: 4, display: "flex", justifyContent: "flex-end" }}>
					<ClearCacheButton onClick={clearCacheAndReload}>Clear cache</ClearCacheButton>
				</Box>
				<ReadyTasks readyToStart={readyTasks} onAdvance={handleProgressTask} />
				<Box sx={{ mb: 4, display: "flex", justifyContent: "flex-end" }}>
					<Button
						variant="contained"
						endIcon={<AddOutlinedIcon />}
						size="medium"
						onClick={() => modalFeature.on()}
						color="info"
					>
						Add new task
					</Button>
				</Box>
				<Tasks>
					{tasks.map((task) => {
						const isReady = canAdvanceTask(task);
						const isHighlighted =
							task.status === "PENDING" && areDependenciesCompleted(getCurrentTasks(), task.name);
						return (
							<TaskItem
								key={task.name}
								task={task}
								isReady={isReady}
								onAdvance={handleProgressTask}
								isHighlighted={isHighlighted}
							/>
						);
					})}
				</Tasks>
			</Container>
			<TaskSnackbar
				open={snackbar.open}
				message={snackbar.message}
				severity={snackbar.severity}
				onClose={handleCloseSnackbar}
			/>
			{modalFeature.isOn && (
				<Modal title="Add new task" open={modalFeature.isOn} onClose={modalFeature.off}>
					<AddTaskForm tasks={tasks} onAdd={handleAddTask} />
				</Modal>
			)}
		</>
	);
};

export default TaskDashboard;
