import "./CardSearchTemplate.scss"
import {SquareTile} from "../squareTile/SquareTile";
import {IProject} from "../../../entities/models/Project/IProject";

interface ICardProps {
    name: string
    dateTime: string
    id: string
    description: string
}

export const CardSearchTemplate = ( {name, description, id, dateTime}: ICardProps) => {

    return(
        <div className={'card-search-template-container'}>
            <SquareTile link={`/search/${id}`}/>
            <div className={'card-search-template-description'}>
                <span>{dateTime}</span>
                <span>{name}</span>
                <span>{description}</span>
            </div>
        </div>
    )
}