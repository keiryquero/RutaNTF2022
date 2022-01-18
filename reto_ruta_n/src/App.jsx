import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/Login.jsx';
import Register from './view/Register.jsx';
//import { collection, getDocs } from 'firebase/firestore';
//import db from './firebaseConfig.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
