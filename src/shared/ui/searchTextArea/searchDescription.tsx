import {InputTextarea} from "primereact/inputtextarea";
import {IDescriptionProps} from "./helpers/types";
import {useState} from "react";
import {Button} from "primereact/button";
import './searchDescription.scss'
import {useAppDispatch} from "../../helpers/hooks/redux";
import {updateProject} from "../../../domain/repositories/api/project/actionCreators/projectActionCreator";

export const SearchDescription = ({description, name, projectId}: IDescriptionProps) => {
    const [desc, setDesc] = useState(description)
    const dispatch = useAppDispatch()
    const editHandler = () => {
        dispatch(updateProject({projectId: projectId, payload:{name: name, description: desc}}))
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