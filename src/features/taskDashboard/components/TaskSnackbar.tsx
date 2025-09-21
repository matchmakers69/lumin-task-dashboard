import { Alert, Snackbar } from "@mui/material";

interface TaskSnackbarProps {
	open: boolean;
	message: string;
	severity?: "success" | "error" | "info";
	onClose: () => void;
}

const TaskSnackbar = ({ open, message, severity = "info", onClose }: TaskSnackbarProps) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
		>
			<Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default TaskSnackbar;
