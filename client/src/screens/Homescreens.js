import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import pizzas from '../pizza-data'
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/pizzaActions';

const Homescreens = () => {

    const dispatch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())

    }, [])

    return (

        <div>

            <div className="row justify-content-center">

                {loading ? (<h1> Cargando </h1>) : error ? (<h1> Algo salió mal </h1>) : (
                    pizzas.map(pizza => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div >
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                )}

            </div>

        </div>

    );
};

export default Homescreens;
