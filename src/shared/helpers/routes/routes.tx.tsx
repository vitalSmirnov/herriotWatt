import React from "react";
import {IRoute} from "../types/types";
import {SearchesPage} from "../../../pages/Searches/ui/SearchesPage";


// const Users = React.lazy(() => import('./Pages/Users/UsersPage'));


export const protectedRoutes: Array<IRoute> = [
    {
        path: '/searches',
        title: 'Исследования',
        element: <SearchesPage/>
    },
    {
        path: '/search/:id',
        title: 'Исследование',
        element: <></>,
    },
];

