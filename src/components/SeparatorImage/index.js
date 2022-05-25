import Image from './image'
import image1 from "../../utils/products/collares/collar.PNG";
import image2 from '../../utils/products/aretes/aretes_03.jpg'
import image3 from '../../utils/products/anillos/anillos.jpg'

const images = [
    {
        id: 1,
        source: image1,
        alt: 'Collar',
    },
    {
        id: 2,
        source: image2,
        alt: 'Aretes',
    },
    {
        id: 3,
        source: image3,
        alt: 'Anillos',
    }
]

function SeparatorImage() {
    return (
        <div class="container-fluid px-0 galeria">
		<div class="row justify-content-center mx-0 px-0">
			{ 
                images.map(({source, alt}) => <Image source={source} alt={alt} /> )
            }
		</div>
	</div>
    )
}

export default SeparatorImage;