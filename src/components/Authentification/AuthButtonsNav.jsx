"use client";

import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "store/entities/auth";
import { selectIsAuth, selectUserName } from "store/entities/auth/selectors";

export default function AuthButtonsNav() {
  const isAuth = useDispatch(selectIsAuth);
  const name = useDispatch(selectUserName);
  return <>{!isAuth && <Link href="/login">Войти</Link>}</>;
}

// {isAuth ? (
//   <>
//     <span>{name}</span> <button onClick={() => signOut()}>Выйти</button>
//   </>
// ) : (
