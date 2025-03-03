import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IError, IUser, ISuccess } from "../../shared/types/types";

import "./LoginPage.css";
// В общем как то так, но лучше конечно реализовать четки статусы и затипизроваить их еще в интерфейсе IError, 
// тогда проще будет выглядеть тип LoginErrors
// Можешь рассмотреть принцип действий, сама идея в том, чтобы ошибки вынеси в отдельный объект, кстати этот объект лучше вынести в отдельный файл папки LoginPage
// Здесь есть еще масса вариантов как улучшить, если что

interface ILoginForm {
	email: string;
	password: string;
}

type LoginErrorsStatus = "L1" | "L2";

type LoginErrors = {
    [key in LoginErrorsStatus]: {
        field: keyof ILoginForm;
        message: { type: string; message: string };
    };
};

const errors: LoginErrors = {
	// L1 - Login Error 1
	L1: {
		field: "email",
		message: { type: "custom", message: "Пользователя не существует" },
	},
	L2: {
		field: "password",
		message: {
			type: "custom",
			message: "Неверный пароль",
		},
	},
};

export function LoginPage() {
	const [success, setSuccess] = useState<boolean>(false);
	const { register, handleSubmit, formState, setError } = useForm<ILoginForm>({
		mode: "onSubmit",
	});

	async function onSubmit(data: ILoginForm) {
		console.log(data);
		const res = await fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const result: ISuccess<IUser> | IError = await res.json();
		console.log(result);
		if (result.status == "success") {
			setSuccess(true);
		} else {
			const error = errors[result.message as LoginErrorsStatus];
			setError(error.field, error.message);
		}
	}

	return success ? (
		<div className="loginPageSuccess">
			<h1>Вы успешно вошли в аккаунт!</h1>
		</div>
	) : (
		<div className="loginPage">
			<form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
				<h1 style={{ color: "white" }}>Вход</h1>
				<div className="inputsForm">
					<div className="inputDiv">
						<input
							className="inputTextForm"
							placeholder="Электронная почта"
							type="text"
							{...register("email", {
								required: {
									value: true,
									message: "Электронная почта обязательна",
								},
							})}
						/>
						<p className="formError">
							{formState.errors.email?.message}
						</p>
					</div>
					<div className="inputDiv">
						<input
							className="inputTextForm"
							placeholder="Пароль"
							type="password"
							{...register("password", {
								required: {
									value: true,
									message: "Пароль обязателен",
								},
							})}
						/>
						<p className="formError">
							{formState.errors.password?.message}
						</p>
					</div>
				</div>
				<button className="loginButton" type="submit">
					Войти
				</button>
				<p className="registerText">
					Нету учетной записи?{" "}
					<Link id="registerLinkButton" to="/register">
						Зарегистрироваться
					</Link>
				</p>
			</form>
		</div>
	);
}
