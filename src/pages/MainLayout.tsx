import {Outlet} from "react-router-dom"
import {Suspense, useEffect} from "react";
import { ProgressSpinner } from 'primereact/progressspinner';

export const MainLayout = () => {

    useEffect(()=>{
        if (sessionStorage.getItem("token") === null && localStorage.getItem("token") !== null) {
            let tokenData = JSON.parse(localStorage.getItem("token") || "")
            sessionStorage.setItem("token", tokenData);
        }
    }, [])

    return (
        <>
            <Suspense fallback={<ProgressSpinner/>}>
                <Outlet/>
            </Suspense>
        </>
    )
}