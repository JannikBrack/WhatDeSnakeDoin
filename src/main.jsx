import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#61446b',
    },
    secondary: {
      main: '#6f4e7b',
    },
    background: {
      default: '#45304c',
      paper: '#72507d',
    },
    divider: 'rgba(113,112,112,0.12)',
    text: {
      primary: '#fff',
      secondary: '#fff'
    }
  },
  typography: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,

  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
