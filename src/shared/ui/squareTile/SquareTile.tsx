import {ISquareTile} from "./helpers/types";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import './squareTile.scss'

export const SquareTile = ({link, photo} : ISquareTile) => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(link)
    }

    return(
        <>
            <div className={'square-tile-template'}>
                <Button outlined severity={'secondary'} icon="pi pi-plus-circle" size={'large'} className={'w-15rem h-15rem'} onClick={onClick}/>
            </div>
        </>
    )
}