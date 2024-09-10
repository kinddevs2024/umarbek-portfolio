import {  } from 'react'
import { Route, Routes ,  } from 'react-router-dom'
import './App.css'
import Loyaout from './Layout/Loyaout'
import Home from './pages/Home/Home'
import Aboute from './pages/About/Aboute'
import { useState, useEffect } from "react";
import Eror from './pages/Eror-404/Eror'
import Projects from './pages/projects/Projects'
import About_me from './pages/about_me/About_me'
import Get_in_touch from './pages/get_in_touch/Get_in_touch'

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
        <Route path='/projects' element={ <Projects/>}/>
        <Route path='/about_me' element={ <About_me/>}/>
        <Route path='/get_in_touch' element={ <Get_in_touch/>}/>
      </Routes>
    </Loyaout>
    </>
  )
}

export default App
