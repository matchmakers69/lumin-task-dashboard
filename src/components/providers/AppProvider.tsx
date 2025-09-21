import { LuminTheme } from "@/theme";
import type { BaseProps } from "@/types/BaseProps";
import { handleError } from "@/utils";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../ui";

function AppProvider({ children }: BaseProps) {
	return (
		<ThemeProvider theme={LuminTheme}>
			<CssBaseline />
			<ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
				{children}
			</ErrorBoundary>
		</ThemeProvider>
	);
}

export default AppProvider;
