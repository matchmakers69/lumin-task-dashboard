import { alpha, createTheme } from "@mui/material/styles";
import { typography } from "@/theme/typography";
import { breakpoints } from "@/theme/breakpoints";
import { brand, gray, palette, red } from "@/theme/palette";

const LuminTheme = createTheme({
	palette,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"*": {
					"&:before": { boxSizing: "border-box" },
					"&:after": { boxSizing: "border-box" },
					boxSizing: "border-box",
				},
				"html, body": {
					width: "100%",
					height: "100%",
				},
				html: {
					MozOsxFontSmoothing: "grayscale",
					WebkitFontSmoothing: "antialiased",
					WebkitOverflowScrolling: "touch",
					textSizeAdjust: "100%",
					fontSize: "62.5%",
				},
				body: {
					padding: 0,
					width: "100%",
					minHeight: "100vh",
					overflowX: "hidden",
					background: palette.background.gray,
					color: palette.text.primary,
					fontSize: 16,
					display: "flex",
					flexDirection: "column",
				},
				"#root": {
					width: "100vw",
					minHeight: "100%",
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					textTransform: "none",
					borderRadius: 32,
					boxShadow: "0 2px 3px 0px rgb(0 0 0 / 35%)",
					fontWeight: 500,
					minWidth: 160,
					fontSize: "1.4rem",
					[theme.breakpoints.up("md")]: {
						fontSize: "1.6rem",
					},
					"&.Mui-disabled": {
						opacity: 0.6,
						cursor: "not-allowed",
						boxShadow: "unset",
					},
					"&.MuiButton-text": {
						boxShadow: "unset",
						"&:hover": {
							backgroundColor: "unset",
						},
					},
				}),
			},
		},

		MuiChip: {
			styleOverrides: {
				root: ({ theme }) => ({
					textTransform: "none",
					borderRadius: 10,
					fontWeight: 500,
					fontSize: "1.2rem",

					[theme.breakpoints.up("md")]: {
						fontSize: "1.3rem",
					},
				}),
				label: {
					paddingLeft: 10,
					paddingRight: 10,
				},
			},
		},

		MuiDialog: {
			styleOverrides: {
				paper: ({ theme }) => ({
					backgroundColor: theme.palette.background.default,
					padding: theme.spacing(2),
					paddingBottom: theme.spacing(1),
					borderRadius: 4,
					minWidth: 300,

					[theme.breakpoints.up("xs")]: {
						minWidth: 320,
					},

					[theme.breakpoints.up("sm")]: {
						minWidth: 600,
					},

					"& .MuiDialogContent-root": {
						paddingTop: theme.spacing(3),
						paddingBottom: theme.spacing(2),
					},

					"& .MuiDialogActions-root": {
						paddingLeft: theme.spacing(2),
						paddingRight: theme.spacing(2),
					},
				}),
			},
		},

		MuiDivider: {
			styleOverrides: {
				root: () => ({
					borderColor: `${alpha(gray[200], 0.8)}`,
				}),
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: () => ({
					color: red[900],
				}),
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: () => ({
					"& .MuiInputBase-input::placeholder": {
						opacity: 0.5,
					},
					"& .MuiOutlinedInput-root": {
						boxSizing: "border-box",
						height: "100%",
						borderRadius: "10px",
						transition: "border-color 120ms ease-in",
						"& fieldset": {
							border: "1px solid",
							borderColor: gray[300],
							boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
							background: `${alpha("#FFF", 0.3)}`,
						},
						"&:hover fieldset": {
							borderColor: brand[200],
						},
						"&.Mui-focused fieldset": {
							borderColor: brand[300],
						},
					},
				}),
			},
		},
	},
	typography,
	breakpoints,
	zIndex: {
		appBar: 1150,
	},
	spacing: 8,
});

export { LuminTheme };
