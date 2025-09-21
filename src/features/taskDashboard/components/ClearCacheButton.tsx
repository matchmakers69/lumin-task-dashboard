import type { BaseProps } from "@/types/BaseProps";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Button from "@mui/material/Button";

type ClearCacheButtonProps = {
	onClick: () => void;
} & BaseProps;

const ClearCacheButton = ({ onClick, children }: ClearCacheButtonProps) => {
	return (
		<Button
			variant="contained"
			size="medium"
			onClick={onClick}
			endIcon={<CachedOutlinedIcon />}
			sx={{
				backgroundColor: (theme) => theme.palette.grey[800],
				"&:hover": {
					backgroundColor: (theme) => theme.palette.grey[900],
				},
			}}
		>
			{children}
		</Button>
	);
};

export default ClearCacheButton;
