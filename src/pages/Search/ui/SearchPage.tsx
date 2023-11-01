import {useParams} from "react-router-dom";
import React from "react";
import {UsersTree} from "../../../components/ui/UsersTree/ui/UsersTree";

export const SearchPage = () => {

    const {searchId} = useParams()

    return(
        <>
            <div className={'search-page-container card flex'}>
                <UsersTree projectId={searchId}/>
            </div>
        </>
    )
}