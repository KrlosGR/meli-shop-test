import { createMuiTheme } from "@material-ui/core";

 export const theme = createMuiTheme({
    props: {
        MuiPaper: {
            square: true
        },
        MuiContainer: {
            disableGutters: true
        }
    },
    typography: {
        fontFamily: [
            'Proxima Nova',
            '-apple-system',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#ededed',
                }
            },
        },
        MuiContainer: {
            root: {
                minHeight: 0,
                backgroundColor: '#ededed'
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: '0 1px 2px 0 rgba(0,0,0,.12)',
            }
        }
    },
});