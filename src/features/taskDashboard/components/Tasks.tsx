import type { BaseProps } from "@/types/BaseProps";
import Grid from "@mui/material/Grid";

const Tasks = ({ children }: BaseProps) => {
	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
			{children}
		</Grid>
	);
};

export default Tasks;
