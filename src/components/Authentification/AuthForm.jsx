import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { signIn } from "store/entities/auth";

export default function AuthForm() {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function submitButton(e) {
    e.preventDefault();
    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    if (!login && !password && !login.length > 3 && !password.length > 4)
      return;

    fetch("/api/login", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json) alert("Ошибка соединения.");
        const { status, name } = json;
        if (status) {
          dispatch(signIn({ isAuth: true, name }));
          setTimeout(() => {
            router.push("/profile");
          });
        }
      });
  }

  return (
    <div className="login-wrap">
      <div className="login-form">
        <h1>Авторизация</h1>
        <input type="text" ref={loginRef} placeholder="Логин" />
        <input type="password" ref={passwordRef} placeholder="Пароль" />
        <button type="submit" onClick={submitButton}>
          Войти
        </button>
      </div>
    </div>
  );
}
