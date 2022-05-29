import './App.css';
import { Galery } from './pages/Galery';
import Home from './pages/Home'
import {  Routes, Route } from "react-router-dom"
import React from 'react'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/galery' element={<Galery />}/>
      </Routes>    
  );
}

export default App;

