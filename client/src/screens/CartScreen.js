import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { addToCart, deleteFromCart } from "../actions/cartAction";

const CartScreen = () => {

  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems;

  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)

  const dispatch = useDispatch()

  return (
    <div>

      <div className="row justify-content-center">

        <div className="col-md-7">
          <h2> Mi Carrito: </h2>
          {cartItems.map(item => {

            return <div className="flex-container">

              <div className="text-left m-1 w-100" >
                <hr />
                <h3> {item.name}</h3>
                <h5> Tamaño seleccionado: {item.varient} </h5>
                <h5> Precio: {item.quantity} * {item.prices[0][item.varient]} = SubTotal Gs. {item.price} </h5>
                <h5 style={{ display: 'inline' }}> Cantidad : </h5>
                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                <b> {item.quantity} </b>
                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
              </div>

              <div className="m-1 w-50 mt-5">
                <img src={item.image} alt="foto de la pizza" style={{ height: '100px' }} />
              </div>

              <div className="m-1 w-50 mt-5">
                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
              </div>

            </div>

          })}

        </div>

        <div className="col-md-4 col align-self-center ">

          <h2 style={{ fontSize: "15px" }}> Total : {subtotal} Gs. </h2>

          <button className='btn btn-danger text-right'> Check Out </button>



        </div>

      </div>

    </div>

  )

};

export default CartScreen;


