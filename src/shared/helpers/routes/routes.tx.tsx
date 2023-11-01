import React from "react";
import {IRoute} from "../types/types";
import {SearchesPage} from "../../../pages/Searches/ui/SearchesPage";
import {SearchPage} from "../../../pages/Search/ui/SearchPage";


export const protectedRoutes: Array<IRoute> = [
    {
        path: '/searches',
        title: 'Исследования',
        element: <SearchesPage/>
    },
    {
        path: '/search/:searchId',
        title: 'Исследование',
        element: <SearchPage/>,
    },
];

