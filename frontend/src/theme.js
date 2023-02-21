import { createTheme } from "@mui/material/styles";
import { palette, typography } from "@mui/system";

export const theme = createTheme({
    shadows: ["none"],
    palette: {
        primary: {
            main: "#4361ee",
        },
    },
    typography: {
        button: {
            textTransform: "none",
            fontWeight: 400,
        },
    },
});
