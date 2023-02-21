import { createTheme, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {

    interface Palette {
        secondaryBg?: {
            header?: string;
            lightGray?: string;
        };
    }

    interface PaletteOptions {
        secondaryBg?: {
            header?: string;
            lightGray?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ED962B"
        },
        secondary: {
            main: "#213159"
        },
        text: {
            primary: "#213159",
            secondary: "#fff"
        },
        background: {
            default: "#F2F5FA",
            paper: "#fff"
        },
        secondaryBg: {
            header: "#fff",
            lightGray: "#D9D9D9"
        }
    }
})