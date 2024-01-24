import React from "react";
import {IRoute} from "../types/types";
import {SearchesPage} from "../../../pages/Searches/ui/SearchesPage";
import {SearchPage} from "../../../pages/Search/ui/SearchPage";
import {ImgPage} from "../../../pages/imgPage/ui/ImgPage";


export const protectedRoutes: Array<IRoute> = [
    {
        path: '/searches',
        title: 'Исследования',
        element: <SearchesPage/>
    },
    {
        path: '/search/:projectId',
        title: 'Исследование',
        element: <SearchPage/>,
    },
    {
        path: '/search/:searchId/img/:imgId',
        title: 'Исследование',
        element: <ImgPage/>,
    },
];

