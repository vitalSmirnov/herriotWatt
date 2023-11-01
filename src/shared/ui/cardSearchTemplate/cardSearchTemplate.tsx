import {ISearch} from "../../helpers/models/ISearch";
import {Button} from "primereact/button";
import "./CardSearchTemplate.scss"
import { useNavigate } from "react-router-dom";

export const CardSearchTemplate = ( props  : ISearch) => {
    const navigate = useNavigate()

    return(
        <div className={'card-search-template-container'}>
            <div className={'card-search-template-inner'}>
                <Button text severity={'secondary'} icon="pi pi-plus-circle" className={'card-search-add-btn'} onClick={() => navigate(`/search/${props.id}`)}/>
            </div>
            <div className={'card-search-template-description'}>
                <span>{props.dateTime}</span>
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}