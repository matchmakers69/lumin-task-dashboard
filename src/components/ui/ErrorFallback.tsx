import { ClearCacheButton } from "@/features/taskDashboard/components";
import { Box, Container, Typography } from "@mui/material";
import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<Container sx={{ py: 8 }} fixed>
			<Box role="alert">
				<Box sx={{ mb: 4 }} component="header">
					<Typography component="h2" variant="h2">
						Something went wrong
					</Typography>
					<Typography component="h3" variant="h3">
						{error.message}
					</Typography>
				</Box>
				<ClearCacheButton onClick={resetErrorBoundary}>Try again</ClearCacheButton>
			</Box>
		</Container>
	);
};

export default ErrorFallback;
