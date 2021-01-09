//import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';
function App() {
  return (
    <div >
      <>
        <Routes/>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
