import s from './Nav.module.css'
import { Link } from "react-router-dom"
import React from "react";


function Navbar() {
    return(
        <nav className={s.menu}>

		    <Link to="/">Nosotros</Link>
		    <Link to="/">Galeria</Link>
		    <Link to="/">Contacto</Link>
	    </nav>
    )
}

export default Navbar;