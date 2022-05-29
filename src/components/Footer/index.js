import { Link } from 'react-router-dom'
import meta from '../../utils/icons/facebook.png'
import insta from '../../utils/icons/instagram-new.png'
import wsp from '../../utils/icons/whatsapp.svg'
import s from './Footer.module.css'
import phone from '../../utils/icons/icon-cellphone.png'
function Footer() {
    return(
        <div className="container-fluid">
			<section className= {`${s.contacto} row justify-content-center`} >
				<div className="col-12 col-md-9 text-center">
					<h2 className= {s.subtitulo} ><span>Contactanos</span></h2>
				</div>

				<div className="w-100 mb-4"></div>
				<div>
					<p className="border-bottom border-top text-center">
						<img src={phone} alt="" />Tel: 1 23 45 67
					</p>
				</div>
			</section>

			<footer className= {`row justify-content-center ${s.redes_sociales}`} >
				<div className="col-auto">
					<Link to="/"><img src={meta} alt="" /></Link>
					<Link to="/"><img src= {wsp} alt="" /></Link>
					<Link to="/"><img src= {insta} alt="" /></Link>
				</div>
			</footer>
		</div>

    )
}

export default Footer;