import React, { useState, useEffect } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../actions/userAction";

const Loginscreens = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <div>
            <h3 className='m-2' >Email </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
              className="form-control"
            />
          </div>


          <div>
            <h3 className='m-2'>Contraseña</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="form-control"
            />

          </div>

          <button className="btn btn-primary mt-4"> Login </button>

          <div className='m-5'>
            <a className="nav-link text-center" href="/register">
              Aún no te has registrado? <br></br>
              CLICK aquí para registrarte!!!
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Loginscreens;