import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/authentication/Login';
import Register from './view/authentication/Register';
import Home from './view/home/Home';
import InitialTest from './view/test/InitialTest';
import TestNoProgrammer from './view/test-no-programmer/TestNoProgrammer';
import TestProgrammer from './view/test-programmer/TestProgrammer';
import Results from './view/results/Results';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
//import { collection, getDocs } from 'firebase/firestore';
//import db from './firebaseConfig.js';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/InitialTest' element={<InitialTest />} />
          <Route path='/TestUser' element={<TestNoProgrammer />} />
          <Route path='/TestProgrammer' element={<TestProgrammer />} />
          <Route path='/Results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

