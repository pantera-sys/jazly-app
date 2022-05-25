

function Article({imageSource, alt, desc}) {
    return(
        <article class="col-6 col-lg-3 py-1">
			<figure class="producto">
				<img  src={imageSource} class="img-fluid" alt={alt} />
				<figcaption class="overlay">
					<p class="overlay-texto">{desc}</p>
				</figcaption>
			</figure>
		</article>
    )
}

export default Article;