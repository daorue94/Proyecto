import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Homescreens from './screens/Homescreens';
import CartScreen from './screens/CartScreen';
import { Registerscreens } from './screens/Registerscreens';
import Loginscreens from './screens/Loginscreens';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Homescreens />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<Registerscreens />} />
          <Route path="/login" element={<Loginscreens />} />

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
