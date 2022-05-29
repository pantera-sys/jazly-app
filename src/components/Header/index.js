import s from './Header.module.css'
import React from "react";

function Header() {
    return(
        <div className={s.contenido_header}>
		    <div className={s.fondo} id="fondo">
		    	<h1 className={s.texto}>Jazly - Accesorios </h1>
		    </div>
	    </div>
    )
}

export default Header;