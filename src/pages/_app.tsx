import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { createTheme,ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {


  const muiTheme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              color: "#fff",
              backgroundColor: "#000",
              ':hover': {
                opacity: 0.999,
                backgroundColor: "#000",
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            textTransform: 'initial',
          },
        },
      },
    },
  })


  return (
    <ThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
