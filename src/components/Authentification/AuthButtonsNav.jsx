"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "store/entities/auth";
import { selectIsAuth, selectUserName } from "store/entities/auth/selectors";

export default function AuthButtonsNav() {
  const isAuth = useSelector(selectIsAuth);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(isAuth);

  return isAuth ? (
    <>
      <span>{name}</span>{" "}
      <button onClick={() => dispatch(signOut())}>Выйти</button>
    </>
  ) : (
    <>
      <span></span>{" "}
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        Войти
      </button>{" "}
    </>
  );
}
