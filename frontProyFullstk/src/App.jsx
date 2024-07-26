import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from'./pages/Dashboard'
import Login from'./pages/login/Login'
import Register from'./pages/register/Register'
import NavBar from './components/navbar/NavBar'
import DetailItems from './pages/details/DetailItems'
import LogOut from './pages/LogOut'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Items from './pages/Items/Items'

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <NavBar />
          <Routes>
            <Route path='/' element={ <Items /> } />
            <Route path='/login' element={ <Login/> } />

            <Route path='/logOut' element={ <LogOut/> } />
            <Route path='/register' element={ <Register/> } />
            <Route path='/api/peliculas/:id' element={ <DetailItems /> } />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
