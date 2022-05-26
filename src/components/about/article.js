

function Article({imageSource, alt, desc}) {
    return(
        <article className="col-6 col-lg-3 py-1">
			<figure className="producto">
				<img  src={imageSource} className="img-fluid" alt={alt} />
				<figcaption className="overlay">
					<p className="overlay-texto">{desc}</p>
				</figcaption>
			</figure>
		</article>
    )
}

export default Article;