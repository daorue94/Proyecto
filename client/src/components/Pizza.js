import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';


export default function Pizza({ pizza }) {

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState("pequeño");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const addToCartHandler = () => {

        dispatch(addToCart(pizza, quantity, varient));

    };


    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">

            <div onClick={handleShow} >

                <h1 >{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="foto de la pizza" />

            </div>

            <div className='flex-container'>

                <div className='w-100 m-1' >
                    <p className='mt-1'> Tamaño </p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}    >
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        }
                        )}
                    </select>

                </div>

                <div className='w-100 m-1'>
                    <p className='mt-1'> Cantidad </p>

                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} key={pizza._id}  >

                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}

                    </select>

                </div>
            </div>

            <div className='flex-container' >

                <div className='m-1 w-100 m-1'>

                    <p className='mt-1'> Precio: {pizza.prices[0][varient] * quantity} Gs. </p>

                </div>

                <div className='m-1 w-100'>
                    <button className="btn btn-danger mt-1" onClick={addToCartHandler}> AGG Carrito</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Pizza {pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="mx-auto d-block" style={{ height: '400px' }} alt="foto de la pizza" />
                    <p><mark>{pizza.description}</mark></p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-danger mt-1" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>



        </div >
    )
}