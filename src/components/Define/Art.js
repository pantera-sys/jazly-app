function Art({title, desc, icon, alt}) {
    return(
        <article class="col-10 col-sm-5">
    		<figure class="text-center">
    			<img src={icon} alt={alt} />
    			<figcaption>
    				<p>
    					<strong class="mb-2">{title}</strong>
    					<div class="w-100"></div>
    					{desc}
    				</p>
    			</figcaption>
    		</figure>
    	</article>
    )
}

export default Art;