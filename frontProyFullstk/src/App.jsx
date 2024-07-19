import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from'./pages/Dashboard'
import Login from'./pages/login/Login'
import Register from'./pages/register/Register'
import NavBar from './components/navbar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <NavBar />
          
          <Routes>
            <Route path='/' element={ <Dashboard/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
