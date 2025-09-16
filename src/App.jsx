import { useState } from 'react'
import './App.css'
import Body from './pages/Body'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Approutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
