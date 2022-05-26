import s from './Nav.module.css'

function Navbar() {
    return(
        <nav className={s.menu}>
		    <a href="#">Nosotros</a>
		    <a href="#">Galeria</a>
		    <a href="#">Contacto</a>
	    </nav>
    )
}

export default Navbar;