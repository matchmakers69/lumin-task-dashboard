import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import type { Task } from "../types/task";
import TaskStatusChip from "./TaskStatusChip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getButtonStatusText } from "../utils/taskUtils";

type TaskItemProps = {
	task: Task;
	isReady: boolean;
	onAdvance: (taskName: string) => void;
	isHighlighted: boolean;
};

const TaskItem = ({ task, isReady, onAdvance, isHighlighted }: TaskItemProps) => {
	return (
		<Grid size={{ xs: 2, sm: 4, md: 4 }}>
			<Box
				sx={{
					p: 2,
					border: "2px solid",
					borderColor: isHighlighted ? "primary.main" : "grey.200",
					borderRadius: 2,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%",
					backgroundColor: (theme) => theme.palette.background.default,
				}}
			>
				<Stack spacing={2} mb={4}>
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="h5">{task.name}</Typography>
						<TaskStatusChip status={task.status} />
					</Stack>
					<Divider />

					{task.dependencies.length > 0 && (
						<Stack direction="column">
							<Typography variant="subtitle2" color="text.primary">
								Dependencies:
							</Typography>
							<Box
								sx={{
									p: 1,
									border: "1px solid",
									borderColor: "grey.300",
									borderRadius: 1,
									backgroundColor: (theme) => theme.palette.grey[50],
								}}
							>
								<Typography variant="body2">{task.dependencies.join(", ")}</Typography>
							</Box>
						</Stack>
					)}
				</Stack>

				{task.status !== "COMPLETED" && (
					<Button
						onClick={() => onAdvance(task.name)}
						disabled={!isReady}
						fullWidth
						endIcon={<PlayCircleOutlineOutlinedIcon />}
						variant="contained"
						size="medium"
						sx={{
							backgroundColor: isReady ? "primary.main" : "grey.200",
							color: isReady ? "primary.contrastText" : "grey.500",
							"&:hover": {
								backgroundColor: isReady ? "primary.dark" : "grey.300",
							},
						}}
					>
						{getButtonStatusText(task.status)}
					</Button>
				)}
				{task.status === "COMPLETED" && (
					<Box
						sx={{
							p: 1,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 1,
							backgroundColor: (theme) => theme.palette.success.main,
							color: (theme) => theme.palette.primary.contrastText,
						}}
					>
						<CheckCircleIcon color="inherit" fontSize="small" />
						<Typography variant="subtitle2" sx={{ color: (theme) => theme.palette.primary.contrastText }}>
							Completed
						</Typography>
					</Box>
				)}
			</Box>
		</Grid>
	);
};

export default TaskItem;
