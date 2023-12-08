import {InputTextarea} from "primereact/inputtextarea";
import {IDescriptionProps} from "./helpers/types";
import {useState} from "react";
import {Button} from "primereact/button";
import './searchDescription.scss'

export const SearchDescription = ({description, name}: IDescriptionProps) => {
    const [desc, setDesc] = useState(description)
    const editHandler = () => {
        console.log(desc)
    }

    return(
        <div className={'search-description-main-container'}>
            <div className={'search-description-border'}>
                <span>{name}</span>
                <InputTextarea autoResize className={'flex-1 mt-4 mb-4'} value={desc} onChange={(e) => setDesc(e.target.value)} rows={5} cols={30} />
                <Button severity={'success'} outlined label={'Редактировать'} className={'w-5 align-self-center'} onClick={editHandler} />
            </div>
        </div>
        )
}