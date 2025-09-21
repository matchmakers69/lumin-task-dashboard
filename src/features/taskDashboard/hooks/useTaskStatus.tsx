import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { Status } from "../types/task";
import type { ReactElement } from "react";

type TaskStatusProps = {
	label: string;
	icon: ReactElement;
	color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

export const useTaskStatus = (
	status: Status,
	iconSize: "small" | "medium" | "large" = "small",
): TaskStatusProps => {
	const mapper: Record<Status, TaskStatusProps> = {
		PENDING: {
			label: "Pending",
			icon: <HourglassEmptyIcon fontSize={iconSize} />,
			color: "warning",
		},
		IN_PROGRESS: {
			label: "In Progress",
			icon: <PlayArrowIcon fontSize={iconSize} />,
			color: "info",
		},
		COMPLETED: {
			label: "Completed",
			icon: <CheckCircleIcon fontSize={iconSize} />,
			color: "success",
		},
	};

	return mapper[status];
};
