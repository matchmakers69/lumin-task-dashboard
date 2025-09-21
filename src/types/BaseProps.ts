import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

export type BaseProps<T = ReactNode> = {
	className?: string;
	children?: T;
	["data-testid"]?: string;
	sx?: SxProps;
};
