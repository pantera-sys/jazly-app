import s from './about.module.css'

function Article({imageSource, alt, desc}) {
    return(
        <article className="col-6 col-lg-3 py-1">
			<figure className= {s.producto} >
				<img  src={imageSource} className="img-fluid" alt={alt} />
				<figcaption className= {s.overlay}>
					<p className= {s.overlay_texto} >{desc}</p>
				</figcaption>
			</figure>
		</article>
    )
}

export default Article;