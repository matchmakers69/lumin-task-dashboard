import { STORAGE_KEY } from "@/features/taskDashboard/constants";
import type { Task, TasksResult } from "@/features/taskDashboard/types/task";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { fetchTasksAPI } from "@/features/taskDashboard/api/fetchTasksAPI";
import { isApiError } from "@/utils";

export const useTasks = () => {
	const [tasksResult, setTasksResult] = useState<TasksResult>({
		is: "idle",
	});
	const [cachedTasks, setCachedTasks] = useLocalStorage<Task[]>(STORAGE_KEY, []);
	const [snackbar, setSnackbar] = useState<{
		open: boolean;
		message: string;
		severity?: "success" | "error" | "info";
	}>({ open: false, message: "", severity: "info" });

	useEffect(() => {
		const initializeTasks = async () => {
			// Check if we have cached tasks
			if (cachedTasks && cachedTasks.length > 0) {
				setTasksResult({ is: "ok", tasks: cachedTasks });
				return;
			}
			// Otherwise fetch from fake API
			setTasksResult({ is: "busy" });
			try {
				const response = await fetchTasksAPI();
				setCachedTasks(response.tasks);
				setTasksResult({ is: "ok", tasks: response.tasks });
			} catch (error) {
				setTasksResult({ is: "fail", error: isApiError(error) ? error.message : "Failed to fetch tasks" });
			}
		};

		initializeTasks();
	}, [cachedTasks, setCachedTasks]);

	return {
		tasksResult,
		setTasksResult,
		cachedTasks,
		setCachedTasks,
		snackbar,
		setSnackbar,
	};
};
