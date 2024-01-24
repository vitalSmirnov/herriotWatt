import {InputText} from "primereact/inputtext";
import {Checkbox} from "primereact/checkbox";
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import './LoginForm.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../shared/helpers/hooks/redux";
import {login} from "../../../../domain/repositories/api/auth/actionCreators/authActionCreator";

export const LoginForm = () => {
    const {error, token, isLoading} = useAppSelector(state => state.authReducer);
    const [remeberMe, setRemember] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const setChecked = (value : boolean)=>{
        setRemember(value)
    }

    const onFinish = () => {
        dispatch(login({email, password}))
    }

    const passwordHandler = (value : string)=>{
        setPassword(value)
    }

    const loginHandler = (value : string)=>{
        setEmail(value)
    }

    useEffect(() => {
        if (token !== null){
            navigate('/searches')
        }
    }, [token]);

    return(
        <>
            <div className={'header-login-form'}>
                <h2>Войти</h2>
            </div>
            <div className={'input-group display-col'}>
                <span className="login-form-label">Электронная почта</span>
                    <InputText placeholder="name" value={email}
                               onChange={(e) => loginHandler(e.currentTarget.value)}/>
            </div>
            <div className={'input-group display-col'}>
                <span className="login-form-label">Пароль</span>
                <InputText type={'password'} placeholder="password" value={password}
                           onChange={(e) => passwordHandler(e.currentTarget.value)}/>
            </div>

            <div className="input-group">
                <Checkbox className={'checkbox'} checked={remeberMe} onChange={(e) => setChecked(!remeberMe)} />
                <span>Запомнить меня</span>
            </div>

            <div className={'input-group w-100 display-col'}>
                <Button className={'btn'} label="Войти" onClick={() => onFinish()}/>
                <Button className={'btn'} severity={'secondary'} label="Зарегистрироваться" />
            </div>
        </>
    )
}