import { Button, Paper, Stack, Typography } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import type { Task } from "../types/task";

type ReadyTasksProps = {
	readyToStart: Task[];
	onAdvance: (taskName: string) => void;
};

const ReadyTasks = ({ readyToStart, onAdvance }: ReadyTasksProps) => {
	return (
		<Paper
			component="section"
			sx={{
				mb: 4,
				p: 4,
				backgroundColor: (theme) => theme.palette.success.light,
				border: "1px solid",
				borderColor: (theme) => theme.palette.success.main,
				borderRadius: 2,
			}}
			elevation={3}
		>
			<Typography variant="h3" color="success.dark" mb={2}>
				You have {readyToStart.length} tasks ready to start
			</Typography>

			{readyToStart.length === 0 ? (
				<Typography variant="body2" sx={{ mt: 1 }}>
					No tasks are ready to start.
				</Typography>
			) : (
				<Stack direction="row" flexWrap="wrap" gap={3}>
					{readyToStart.map((task) => (
						<Button
							endIcon={<PlayCircleOutlineOutlinedIcon />}
							key={task.name}
							onClick={() => onAdvance(task.name)}
							variant="contained"
							size="medium"
							sx={{
								backgroundColor: "primary.main",
								color: "primary.contrastText",
								"&:hover": {
									backgroundColor: "primary.dark",
								},
							}}
						>
							{task.name}
						</Button>
					))}
				</Stack>
			)}
		</Paper>
	);
};

export default ReadyTasks;
