import meta from '../../utils/icons/facebook.png'
import insta from '../../utils/instagram-new.png'
import wsp from '../../utils/icons/whatsapp.svg'

function Footer() {
    return(
        <div className="container-fluid">
			<section className="contacto row justify-content-center">
				<div className="col-12 col-md-9 text-center">
					<h2 className="subtitulo"><span>Contactanos</span></h2>
				</div>

				<div className="w-100 mb-4"></div>
				<div>
					<p className="border-bottom border-top">
						<img src="img/icons/icon-cellphone.png" alt="" />Tel: 1 23 45 67
					</p>
				</div>
			</section>

			<footer className="row justify-content-center redes-sociales">
				<div className="col-auto">
					<a href="#"><img src="img/icons/facebook.png" alt="" /></a>
					<a href="#"><img src="img/icons/whatsapp.svg" alt="" /></a>
					<a href="#"><img src="img/icons/instagram-new.png" alt="" /></a>
				</div>
			</footer>
		</div>

    )
}

export default Footer;