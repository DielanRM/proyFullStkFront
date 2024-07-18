import { useState, useEffect } from "react"
import { FaUserAstronaut } from "react-icons/fa";
import './Register.scss'

const Register = () => {

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
            <FaUserAstronaut size={30} />Registrar
          </h3>
          <p>
            Crea tu Cuenta aqui
          </p>
        </section>

        <section className="form-container">
          <form onSubmit={onSubmit}>
            <div>
              <input type="text"
                className="form__form-group__input"
                id="nombre"
                name="nombre"
                value={nombre}
                placeholder="Teclea tu nombre"
                onChange={onChange}
              />
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
              <input type="password"
                className="form__form-group__input"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirma tu password"
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

export default Register