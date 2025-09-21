import type { BaseProps } from "@/types/BaseProps";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import type { ModalProps as MUIModalProps } from "@mui/material/Modal";

type ModalProps = {
	open: boolean;
	title: string;
	onClose?: () => void;
} & BaseProps &
	Omit<MUIModalProps, "open" | "onClose">;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		paddingTop: theme.spacing(2),
		justifyContent: "flex-start",
	},
}));

const Modal = ({ open, title, onClose, children, ...muiProps }: ModalProps) => {
	return (
		<BootstrapDialog
			role="dialog"
			scroll="body"
			open={open}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			{...muiProps}
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
				{title}
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={(theme) => ({
					position: "absolute",
					right: 8,
					top: 8,
					color: theme.palette.grey[500],
				})}
			>
				<CloseIcon />
			</IconButton>
			<Divider />

			<DialogContent>{children}</DialogContent>
			<Divider />
			<DialogActions>
				<Button sx={{ minWidth: "auto" }} variant="text" size="medium" autoFocus onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		</BootstrapDialog>
	);
};

export default Modal;
