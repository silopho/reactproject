import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IError, IUser, ISuccess,  } from "../../shared/types/types"

import "./LoginPage.css"

interface IForm {
    email: string,
    password: string,
}

export function LoginPage() {
    const [success, setSuccess] = useState< boolean >(false)
    const { register, handleSubmit, formState, setError} = useForm <IForm>({
        mode: 'onSubmit'
    })

    async function onSubmit(data: IForm){
        console.log(data)
        const res = await fetch("http://localhost:8000/login", {
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
            if (result.message == "user not found") {
                setError('email', { type: 'custom', message: 'Пользователя не существует'})
            }
            if (result.message == "password incorrect") {
                setError('password', { type: 'custom', message: 'Неверный пароль'})
            }
        }
    }

    return (
        success
        ?
        <div className="loginPageSuccess">
            <h1>Вы успешно вошли в аккаунт!</h1>
        </div>
        :
        <div className="loginPage">
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{ color: "white" }}>Вход</h1>
                <div className="inputsForm">
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Электронная почта" type="text" {...register('email', {
                            required: {value: true, message: 'Электронная почта обязательна'}
                        })} />
                        <p className="formError">{formState.errors.email?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Пароль" type="password" {...register('password', {
                            required: {value: true, message: 'Пароль обязателен'}, 
                            })}
                        />
                        <p className="formError">{formState.errors.password?.message}</p>
                    </div>
                </div>
                <button className="loginButton" type="submit">Войти</button>
                <p className="registerText">Нету учетной записи? <Link id="registerLinkButton" to="/register">Зарегистрироваться</Link></p>
            </form>
        </div>
    )
}