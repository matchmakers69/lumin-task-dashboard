import Chip from "@mui/material/Chip";
import { useTaskStatus } from "../hooks";
import type { Status } from "../types/task";

type TaskStatusChipProps = {
	status: Status;
};
const TaskStatusChip = ({ status }: TaskStatusChipProps) => {
	const { label, icon, color } = useTaskStatus(status);
	return <Chip label={label} icon={icon} color={color} size="small" />;
};

export default TaskStatusChip;
