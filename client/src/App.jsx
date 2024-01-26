import './App.css'
import Login from './components/Login/Login'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup/Signup'
import Home from './Pages/Home/Home'
import TaskEdit from './components/TaskEdit/TaskEditModel'

function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    // <>
    // <Login/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate  replace to={'/login'} />} />
        <Route path='/:id' element={user ? <TaskEdit /> : <Navigate  replace to={'/login'} />} />
        <Route path='/login' element={user ? <Navigate replace to={'/'} /> : <Login />} />
        <Route path='/signup' element={user ? <Navigate replace to={'/'} /> : <Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
