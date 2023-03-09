import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

const Navbar = () => {
  const cartstate = useSelector(state => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3 mb-5 bg-white rounded ">
        <a className="navbar-brand" href="/#">
          Dahi's Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">

            {currentUser ? (
              <div className="dropdown">
                <a className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* <a className="dropdown-item" href="#"></a>
                  <a className="dropdown-item" href="#">Cerrar Sesión</a> */}
                </div>
              </div>
            )
              :
              (
                <a className="nav-item nav-link active" href="/login">
                  Login <span className="sr-only">(current)</span>
                </a>

              )}

            <a className="nav-link" href="/register">
              Registro
            </a>

            <a className="nav-link" href="/cart">
              Carrito:  {cartstate.cartItems.length}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
