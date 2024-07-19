import { useState, useEffect } from "react"
import { LiaSignInAltSolid } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import './Login.scss'
import Spinner from "../../components/Spinner";

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  
  const onSubmit = (e) => {
    e.preventDefault()
    //if (password !== user.password && email !== user.email) {
    //  toast.error('Usuario no registrado')
    //} else {
      const userData = {
        email,
        password
      }
      dispatch(login(userData))
    //}
  }


  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <div className="main-container">

        <section className="form-container">
          <h3>
            <LiaSignInAltSolid size={30} />Login
          </h3>
          <p>
            Teclea tus credenciales
          </p>
        </section>

        <section className="form-container">
          <form onSubmit={onSubmit}>
            <div>
              <input type="email"
                className="form__form-group__input"
                id="email"
                name="email"
                value={email}
                placeholder="Teclea tu email"
                onChange={onChange}
              />
              <input type="password"
                className="form__form-group__input"
                id="password"
                name="password"
                value={password}
                placeholder="Teclea tu password"
                onChange={onChange}
              />
            </div>

            <button type="submit">Ingresar</button>

          </form>

        </section>
      </div>
    </>
  )
}

export default Login
