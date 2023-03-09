import { combineReducers, applyMiddleware } from "redux"
import { createStore } from 'redux'
import thunk from "redux-thunk"
// import { useEffect, useState } from "react";

import { composeWithDevTools } from '@redux-devtools/extension'

import { getAllPizzasReducer } from "./reducers/pizzaReducers"
import { cartReducer } from "./reducers/cartReducer"
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";


const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer

});

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
if (localStorage.getItem('cartItems') === null || localStorage.getItem('cartItems') === undefined) {

    localStorage.setItem('cartItems', 'undefined')
}

var userRolesStr = localStorage.getItem('cartItems') || null;
var cartItems = []
if (userRolesStr !== "undefined") {
    console.log("aqui")
    cartItems = JSON.parse(userRolesStr);
}


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    },
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk))
    // rootReducer,
);






export default store;
