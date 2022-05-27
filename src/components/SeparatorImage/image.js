function Image({source, alt}) {
	return(
    <div className="col-4 px-0 mx-0">
		<img src={source} alt={alt} />
	</div>
	)
}

export default Image;