import { grey, pink } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Arial",
            textTransform: 'none',
            fontSize: 15,
        },
    },
    palette: {
        primary: {
            main: grey[700]
        },
        secondary: {
            main: pink[500]
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                sx: {
                    px: 1,
                },
                variant: 'subtitle2',
                textTransform: 'capitalize',
            },
        },
        MuiStack: {
            defaultProps: {
                sx: {
                    px: 2,
                    py: 1,
                },
                spacing: 2,
                direction: 'row',
            },
        },
        MuiPaper: {
            efaultProps: {
                elevation: 0
            }
        },
        MuiLink: {
            defaultProps: {
                sx: {
                    color: theme => theme.palette.primary.main
                },
                underline: 'none',
            }
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
                p: 0,
                disableRipple: true, 
            },
            variant: 'text',
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})


const AppthemeProvider = (prop) => {
  return (
    <ThemeProvider theme={theme}>
        { prop.children }
    </ThemeProvider>
  )
}

export default AppthemeProvider