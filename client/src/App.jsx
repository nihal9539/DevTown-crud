import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from './components/Signup/Signup'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <Login/>
    // </>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
