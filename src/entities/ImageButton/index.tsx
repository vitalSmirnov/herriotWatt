import {Button} from "primereact/button";
import {IPhoto} from "../models/Photo/IPhoto";
import {useNavigate} from "react-router-dom";
import {PlusIcon} from "primereact/icons/plus";

interface ImageButtonProps {
    link: string;
    image?: IPhoto
}
const ImageButton = ({link, image} : ImageButtonProps) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(link)
    }

    return (
        <Button onClick={onClick} style={{width: '10rem', height: '10rem', background:'transparent', display: 'flex', justifyContent: 'center', alignItems:'center', margin:'1rem'}}>
            {image ? <img style={{width: '100%'}} src={image.url} alt={'img'}/> : <PlusIcon color={'black'}/> }
        </Button>
    )
}

export default ImageButton