import {Outlet, useNavigate} from "react-router-dom"
import {Suspense, useEffect} from "react";
import { ProgressSpinner } from 'primereact/progressspinner';

export const MainLayout = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        if (sessionStorage.getItem("token") === null && localStorage.getItem("token") !== null) {
            let tokenData = JSON.parse(localStorage.getItem("token") || "")
            sessionStorage.setItem("token", tokenData);
            navigate('/searches');
        }
    }, [])

    return (
        <>
            <Suspense fallback={<ProgressSpinner/>}>
                <div className={'mr-7 ml-7'}>
                    <Outlet/>
                </div>
            </Suspense>
        </>
    )
}