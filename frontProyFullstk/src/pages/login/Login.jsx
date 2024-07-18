import { useState, useEffect } from "react"
import { LiaSignInAltSolid } from "react-icons/lia";
import './Login.scss'

const Login = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    password2: ''
  })

  const { nombre, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
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

            <button type="submit">Registrar</button>

          </form>

        </section>
      </div>
    </>
  )
}

export default Login
