import {useParams} from "react-router-dom";
import React from "react";
import {UsersTree} from "../../../components/ui/UsersTree/ui/UsersTree";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import {SquareTile} from "../../../shared/ui/squareTile/SquareTile";
import {Button} from "primereact/button";
import './searchPage.scss'
import {TileDataView} from "../../../shared/ui/TileDataView/ui/TileDataView";
import {IImageProps} from "../helpers/types";
export const SearchPage = () => {

    const {searchId} = useParams()

    const fetchedValues : IImageProps[] = [
        {
            id: '0',
            url: ''
        },
        {
            id: '1',
            url: ''
        },
        {
            id: '2',
            url: ''
        },
        {
            id: '3',
            url: ''
        },
    ]

    const templateMapper = (item: IImageProps) => {
        return(
            <SquareTile link={`img/${item.id}`}/>
        )
    }

    return(
        <>
            <div className={'search-page-main-container'}>
                <div className={'card flex justify-content-between mt-5'}>
                    <UsersTree projectId={searchId}/>
                    <SearchDescription description={'Описание проекта'}/>

                    <div className={'search-page-img-list'}>
                        <TileDataView values={fetchedValues} layout={'grid'} templateMapper={templateMapper}/>
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button severity={'help'} label={'Скачать результаты исследования'}/>
                </div>
            </div>
        </>
    )
}