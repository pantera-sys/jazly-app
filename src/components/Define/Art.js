function Art({title, desc, icon, alt}) {
    return(
        <article className="col-10 col-sm-5">
    		<figure className="text-center">
    			<img src={icon} alt={alt} />
    			<figcaption>
    				<p>
    					<strong className="mb-2">{title}</strong>
    					<div className="w-100"></div>
    					{desc}
    				</p>
    			</figcaption>
    		</figure>
    	</article>
    )
}

export default Art;