import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { registerUser } from '../actions/userAction';



export const Registerscreens = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (password !== confrimPassword) {
      alert("Las contraseñas no coinciden");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
      console.log(user)
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <div>
            <h1 className='text-center m-2'> ¡Bienvenido! </h1>
            <h3> Por favor ingrese sus datos para el registro </h3>

            <input
              type="text"
              required
              placeholder="Ingrese su nombre"
              value={name}
              onChange={(e) =>
                setName(e.target.value)}
              className="form-control"
            />

            <input
              required
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />

            <input
              required
              type="password"
              placeholder="Ingrese una contraseña"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              required
              type="password"
              placeholder="Confirme su contraseña"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />

            <button className="btn btn-primary mt-4" onClick={register}> Registro </button>
          </div>
        </div>
      </div>
    </div>
  )
}