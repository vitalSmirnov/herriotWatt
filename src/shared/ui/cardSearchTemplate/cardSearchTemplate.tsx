import {ISearch} from "../../helpers/models/ISearch";
import "./CardSearchTemplate.scss"
import {SquareTile} from "../squareTile/SquareTile";

export const CardSearchTemplate = ( props  : ISearch) => {

    return(
        <div className={'card-search-template-container'}>
            <SquareTile link={`/search/${props.id}`}/>
            <div className={'card-search-template-description'}>
                <span>{props.dateTime}</span>
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}