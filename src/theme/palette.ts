import { alpha } from "@mui/material/styles";

export const brand = {
	50: "#FFFFFF",
	100: "#B2EBF2",
	200: "#80DEEA",
	300: "#4DD0E1",
	400: "#26C6DA",
	500: "#00BCD4",
	600: "#00ACC1",
	700: "#0097A7",
	800: "#00838F",
	900: "#006064",
};

export const secondary = {
	50: "#ECEFF1",
	100: "#CFD8DC",
	200: "#B0BEC5",
	300: "#90A4AE",
	400: "#78909C",
	500: "#607D8B",
	600: "#546E7A",
	700: "#455A64",
	800: "#37474F",
	900: "#263238",
};

export const gray = {
	50: "#FAFAFA",
	100: "#F5F5F5",
	200: "#EEEEEE",
	300: "#E0E0E0",
	400: "#BDBDBD",
	500: "#9E9E9E",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
};

export const green = {
	50: "#e8f4e9",
	100: "#c7e4c9",
	200: "#a3d3a6",
	300: "#7fc383",
	400: "#64b66a",
	500: "#4aaa50",
	600: "#419b47",
	700: "#37893d",
	800: "#2d7833",
	900: "#1c5921",
};

export const red = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
};

export const amber = {
	50: "#fff8e1",
	100: "#ffecb3",
	200: "#ffe082",
	300: "#ffd54f",
	400: "#ffca28",
	500: "#ffc107",
	600: "#ffb300",
	700: "#ffa000",
	800: "#ff8f00",
	900: "#ff6f00",
};

export const teal = {
	50: "#E0F2F1",
	100: "#B2DFDB",
	200: "#80CBC4",
	300: "#4DB6AC",
	400: "#26A69A",
	500: "#009688",
	600: "#00ACC1",
	700: "#00796B",
	800: "#00695C",
	900: "#004D40",
};

export const palette = {
	primary: {
		light: brand[100],
		main: brand[600],
		dark: brand[800],
		contrastText: brand[50],
	},
	secondary: {
		light: teal[200],
		main: teal[700],
		dark: teal[800],
		contrastText: brand[50],
	},
	warning: {
		main: amber[600],
		dark: amber[800],
		contrastText: brand[50],
	},
	error: {
		light: red[50],
		main: red[500],
		dark: red[700],
		contrastText: brand[50],
	},
	success: {
		light: green[50],
		main: green[400],
		dark: green[900],
		contrastText: brand[50],
	},

	grey: {
		50: gray[50],
		100: gray[100],
		200: gray[200],
		300: gray[300],
		400: gray[400],
		500: gray[500],
		600: gray[600],
		700: gray[700],
		800: gray[800],
		900: gray[900],
		contrastText: brand[50],
	},
	divider: alpha(gray[400], 0.5),
	background: {
		default: brand[50],
		secondary: teal[600],
		paper: brand[50],
		gray: gray[100],
	},
	text: {
		primary: gray[800],
		secondary: gray[600],
		light: gray[50],
	},
	action: {
		selected: `${alpha(brand[200], 0.2)}`,
	},
};
