import image1 from '../../utils/products/anillos/anillos.jpg'
import image2 from '../../utils/products/aretes/aretes.jpg'
import image3 from '../../utils/products/pulseras/product_01.jpg'
import image4 from '../../utils/products/anillos/product_01.jpg'
import Article from './article'
import s from './about.module.css'
import {  Link } from "react-router-dom"
import React from "react";


const card = [
    {
        id: 1,
        image: image1, 
        alt: 'anillos // rings',
        desc: 'Anillos'
    },
    {
        id: 2,
        image: image2,
        alt: 'aretes',
        desc: 'descripcion pequeña'

    },
    {
        id: 3,
        image: image3,
        alt: 'pulseras',
        desc: 'descripcion pequeña'

    },
    {
        id: 4,
        image: image4,
        alt: 'anillos // rings ',
        desc: 'descripcion pequeña'

    },
]



function About() {
    return(
        <main className="container">
		<div className= {`row ${s.nosotros} justify-content-center`} >
			<div className="col-12 text-center">
				<h2 className= {s.subtitulo} ><span>¿Quienes somos?</span></h2>
				<h3 className={s.titulo}>Nuestra pasión por piedras exóticas y la elegancia.</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis illum sequi quia doloribus quas consequatur autem inventore soluta voluptatum vero quibusdam illo cum, quod nostrum aspernatur. Autem, amet quasi.
				</p>
				<Link to="/" className= {s.enlace} >Descubre tu próximo diseño</Link>
			</div>
		</div>
		{/*  Imagenes con etiqueta  */}
		<div className = {`row ${s.productos}`} >
			<article className="col-12 text-center">
				<h2 className={s.subtitulo}><span>Lo que ofrecemos</span></h2>
				<p className= {s.titulo} >Nuestros Produtos</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit veniam saepe cum aspernatur neque odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt perferendis. Lorem ipsum dolor sit amet consectetur.</p>
			</article>

			<div className="col-12" >
				<div className="row justify-content-center" >
					{
                        card.map(({image, alt, desc}) => <Article imageSource={image} alt={alt} desc={desc} />)
                    }
					<button className= {`d-block ${s.btn_productos}`} >Todos los productos</button>
				</div>
			</div>
		</div>
	</main>
    )
}

export default About;