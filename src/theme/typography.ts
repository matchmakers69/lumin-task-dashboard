export const typography = {
	fontFamily: ["Poppins", "sans-serif"].join(","),
	fontSize: 16,
	fontDisplay: "swap",

	h1: {
		fontFamily: ["'Oswald'", "sans-serif"].join(","),
		fontSize: 60,
		fontWeight: 400,
		lineHeight: 1.1,
		letterSpacing: 0.02,
		"@media (max-width:600px)": {
			fontSize: 42,
		},
	},
	h2: {
		fontFamily: ["'Oswald'", "sans-serif"].join(","),
		fontSize: 48,
		fontWeight: 400,
		lineHeight: 1.2,
		letterSpacing: 0.015,
		"@media (max-width:600px)": {
			fontSize: 36,
		},
	},
	h3: {
		fontFamily: ["'Oswald'", "sans-serif"].join(","),
		fontSize: 36,
		fontWeight: 400,
		lineHeight: 1.2,
		letterSpacing: 0.01,
		"@media (max-width:600px)": {
			fontSize: 28,
		},
	},
	h4: {
		fontSize: 28,
		fontWeight: 600,
		lineHeight: 1.4,
		"@media (max-width:600px)": {
			fontSize: 24,
		},
	},
	h5: {
		fontSize: 20,
		fontWeight: 600,
		lineHeight: 1.4,
		"@media (max-width:600px)": {
			fontSize: 18,
		},
	},
	h6: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: 1.4,
		"@media (max-width:600px)": {
			fontSize: 16,
		},
	},
	subtitle1: {
		fontSize: 18,
		fontWeight: 400,
		lineHeight: 1.5,
		letterSpacing: 0.005,
	},
	subtitle2: {
		fontSize: 16,
		fontWeight: 500,
		lineHeight: 1.5,
		letterSpacing: 0.01,
	},

	body1: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 1.6,
		letterSpacing: 0.005,
	},
	body2: {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 1.5,
		letterSpacing: 0.01,
	},

	responsiveFontSizes: true,
};
