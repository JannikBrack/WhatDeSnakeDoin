import { useState } from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
            test
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default App
