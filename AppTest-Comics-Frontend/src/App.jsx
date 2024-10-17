import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LadingPage } from './pages/LandingPage'
import Header from './components/Header'
import './App.css'
import { AllRoutes } from './routers/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <AllRoutes/>
    </>
  )
}

export default App
