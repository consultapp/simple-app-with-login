"use client";

import React, { useEffect, useState, useRef } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("auth")));
  const router = useRouter();

  const login = useRef();
  const password = useRef();

  async function submitButton(e) {
    e.preventDefault();
    const l = login.current.value;
    const p = password.current.value;

    if (!l && !p && !l.length > 3 && !p.length > 4) return;

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
      body: JSON.stringify({ login: l, password: p }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json) alert("Ошибка соединения.");
        const { status } = json;
        setIsAuth(status);
      });
  }

  useEffect(() => {
    localStorage.setItem("auth", isAuth);

    if (isAuth) {
      redirect("/profile");
    }
  }, [isAuth]);

  return (
    <div className="login-wrap">
      <div className="login-form">
        <h1>Авторизация</h1>
        <input type="text" ref={login} placeholder="Логин" />
        <input type="password" ref={password} placeholder="Пароль" />
        <button type="submit" onClick={submitButton}>
          Войти
        </button>
      </div>
    </div>
  );
}
