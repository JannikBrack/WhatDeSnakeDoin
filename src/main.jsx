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
      main: '#f0c8ff',
    },
    background: {
      default: '#45304c',
      paper: '#72507d',
    },
    divider: 'rgba(113,112,112,0.12)',
  },
  typography: {
    fontFamily: 'Lato-Regular',
  }
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
