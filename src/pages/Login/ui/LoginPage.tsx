import './LoginPage.scss'
import {LoginForm} from "../../../components/ui/LoginForm/ui/LoginForm";


export const LoginPage = () => {

    return(
        <>
            <div className={'form-container border display-center'}>
                <LoginForm/>
            </div>
        </>
    )
}