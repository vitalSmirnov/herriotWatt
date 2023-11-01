import {useParams} from "react-router-dom";
import React from "react";
import {UsersTree} from "../../../components/ui/UsersTree/ui/UsersTree";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import {SquareTile} from "../../../shared/ui/squareTile/SquareTile";
import {Button} from "primereact/button";
import './searchPage.scss'
export const SearchPage = () => {

    const {searchId} = useParams()

    return(
        <>
            <div className={'search-page-main-container'}>
                <div className={'search-page-container card flex justify-content-evenly mt-5'}>
                    <UsersTree projectId={searchId}/>
                    <SearchDescription description={'Описание проекта'}/>
                    <div>
                    <SquareTile link={`img/${0}`}/>
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button severity={'help'} label={'Скачать результаты исследования'}/>
                </div>
            </div>
        </>
    )
}