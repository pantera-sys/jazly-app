import gift from "../../utils/icons/gift_present_box_icon_176476.png";
import ring from '../../utils/icons/ring_114776.png';
import Art from "./Art";
import s from './Define.module.css'

const icons = [
    {
        id: 1,
        title:'Regalo Especial',
        icon: gift,
        desc: 'El mejor regalo que le puedes dar a esa persona especial por su dia.',
        alt : 'gift / regalo',
    },
    {
        id: 2,
        title:'Personalizado a tu gusto.',
        icon: ring,
        desc: 'Puedes pedirlo totalmente personalizado a tu gusto.',
        alt : 'ring',
    },
]

function Define() {
    return(
        <div className="container">
		<div className="row acerca-de justify-content-around">
			{ 
                icons.map(({title, icon, desc, alt}) => <Art title={title} icon={icon} desc={desc} alt={alt} />)
            }
		</div>
	</div>
    )
}

export default Define;