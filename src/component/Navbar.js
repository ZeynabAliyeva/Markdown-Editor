import React from 'react'
import './style.css'
import { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Display from "./Display"
import EditNote from "./EditNote";

function Navbar() {
    const [textarea,setTextarea] = useState("");
  return (
    <>
    <div className='navDiv'>
    <Link to='/' className='link'>Edit</Link>
    <Link to='/display' className='link'>Display</Link>
    </div>
    <Routes>
    <Route element={<EditNote textarea={textarea} setTextarea={setTextarea}/>} path="/"></Route>
    <Route element={<Display textarea={textarea} setTextarea={setTextarea}/>} path="/display"></Route>
   </Routes>
    </>
  )
}

export default Navbar