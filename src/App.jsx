import {  } from 'react'
import { Route, Routes ,  } from 'react-router-dom'
import './App.css'
import Loyaout from './Layout/Loyaout'
import Home from './pages/Home/Home'
import Aboute from './pages/About/Aboute'
import { useState, useEffect } from "react";
import Eror from './pages/Eror-404/Eror'

function App() {
  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});
  return (
    <>
    <Loyaout >
      <Routes >
        <Route  path='/' element={<Home />}/>
        <Route path='/about' element={ <Aboute/>}/>
        <Route path='*' element={ <Eror/>}/>
      </Routes>
    </Loyaout>
    </>
  )
}

export default App
