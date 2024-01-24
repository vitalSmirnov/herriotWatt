import {LoginForm} from "../../../components/ui/LoginForm/ui/LoginForm";
import {useAppSelector} from "../../../shared/helpers/hooks/redux";
import {ProgressSpinner} from "primereact/progressspinner";
// @ts-ignore
import styles from './index.module.scss'

export const LoginPage = () => {
    const { isLoading} = useAppSelector(state => state.authReducer);
    return(
        <>
            <div className={styles.loginMainContainer}>
                { !isLoading?
                    <div className={styles.formContainer}>
                        <LoginForm/>
                    </div>:
                    <ProgressSpinner/>
                }
            </div>
        </>
    )
}