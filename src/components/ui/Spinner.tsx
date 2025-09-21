import { Box, CircularProgress } from "@mui/material";
import type { BaseProps } from "@/types/BaseProps";

const Spinner = ({ sx }: BaseProps) => {
	return (
		<Box
			sx={{
				position: "fixed",
				left: 0,
				top: 0,
				width: "100vw",
				height: "100vh",
				backgroundColor: (theme) => theme.palette.background.default,
				opacity: 0.6,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 2,
				...sx,
			}}
		>
			<CircularProgress color="info" aria-label="loading-spinner" />
		</Box>
	);
};

export default Spinner;
