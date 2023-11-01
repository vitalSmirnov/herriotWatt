import {ISearch} from "../../helpers/models/ISearch";
import {Button} from "primereact/button";
import "./CardSearchTemplate.scss"

export const CardSearchTemplate = ( props  : ISearch) => {


    return(
        <div className={'card-search-template-container'}>
            <div className={'card-search-template-inner'}>
                <Button text severity={'secondary'} icon="pi pi-plus-circle" className={'card-search-add-btn'} />
            </div>
            <div className={'card-search-template-description'}>
                <span>{props.dateTime}</span>
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}