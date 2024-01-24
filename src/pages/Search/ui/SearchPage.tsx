import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {UsersTree} from "../../../components/ui/UsersTree/ui/UsersTree";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import {Button} from "primereact/button";
import './searchPage.scss'
import {TileDataView} from "../../../shared/ui/TileDataView/ui/TileDataView";
import {useAppDispatch, useAppSelector} from "../../../shared/helpers/hooks/redux";
import {getProjectDetailed} from "../../../domain/repositories/api/project/actionCreators/projectActionCreator";
import {IPhoto} from "../../../entities/models/Photo/IPhoto";
import ImageButton from "../../../entities/ImageButton";
export const SearchPage = () => {
    const dispatch = useAppDispatch()
    const { projectDetailed, isLoading} = useAppSelector(state => state.projectReducer);
    const {projectId} = useParams()

    useEffect(() => {
        dispatch(getProjectDetailed({projectId}))
    }, [projectId]);

    const templateMapper = (item: IPhoto) => {
        return(
            <ImageButton link={`img/${item.id}`} image={item}/>
        )
    }


    return(
        <>
            <div className={'search-page-main-container'}>
                <div className={'card flex justify-content-between mt-5'}>
                    <UsersTree projectId={projectId}/>
                    <SearchDescription projectId={projectId!} description={projectDetailed.description} name={projectDetailed.name}/>

                    <div className={'search-page-img-list'}>
                        <ImageButton link={`img/new`}/>
                        {
                            projectDetailed.photos && <TileDataView values={projectDetailed.photos} layout={'grid'} templateMapper={templateMapper}/>
                        }
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button severity={'help'} label={'Скачать результаты исследования'}/>
                </div>
            </div>
        </>
    )
}