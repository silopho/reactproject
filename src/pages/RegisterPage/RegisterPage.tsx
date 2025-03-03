import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { ISuccess, IError, IUser } from "../../shared/types/types"

import "./RegisterPage.css"
// IRegisterForm
interface IForm {
    username: string,
    email: string,
    password: string,
}

export function RegisterPage() {
    const [success, setSuccess] = useState< boolean >(false)
    const { register, handleSubmit, formState, setError} = useForm <IForm>({
        mode: 'onSubmit'
    })

    async function onSubmit(data: IForm){
        console.log(data)
        const res = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result: ISuccess<IUser> | IError = await res.json()
        console.log(result)
        if (result.status == "success") {
            setSuccess(true)
        } else {
            if (result.message == "username already exists") {
                setError('username', { type: 'custom', message: 'Имя пользователя уже используется'})
            }
            if (result.message == "email already exists") {
                setError('email', { type: 'custom', message: 'Электронная почта уже используется'})
            }
        }
    }

    return (
        success
        ?
        <div className="registerPageSuccess">
            <h1>Аккаунт успешно создан!</h1>
            <Link id="loginLinkButton" to="/login">Войти</Link>
        </div>
        :
        <div className="registerPage">
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <h1>Регистрация</h1>
                <div className="inputsForm">
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Имя пользователя" type="text" {...register('username', {
                            required: {value: true, message: 'Имя пользователя обязателен'},
                            minLength: {value: 3, message: 'Имя пользователя должно состоять минимум из 3 символов'}, 
                            maxLength: {value: 20, message: 'Имя пользователя должно состоять максимум из 20 символов'}
                        })} />
                        <p className="formError">{formState.errors.username?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Электронная почта" type="text" {...register('email', {
                            required: {value: true, message: 'Электронная почта обязательна'}
                        })} />
                        <p className="formError">{formState.errors.email?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Пароль" type="password" {...register('password', {
                            required: {value: true, message: 'Пароль обязателен'}, 
                            minLength: {value: 6, message: 'Пароль должен состоять минимум из 6 символов'}, 
                            maxLength: {value: 20, message: 'Пароль должен состоять максимум из 20 символов'} })}
                        />
                        <p className="formError">{formState.errors.password?.message}</p>
                    </div>
                </div>
                <button className="registerButton" type="submit">Зарегестрироватся</button>
                <p className="loginText">Уже есть учетная запись? <Link id="loginLinkButton" to="/login">Войти</Link></p>
            </form>
        </div>
    )
}