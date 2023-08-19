"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "store/entities/auth/selectors";

export default function AuthController({ children }) {
  const isAuth = useSelector(selectIsAuth);
  if (isAuth) {
    return (
      <>
        <p>Auth TRUE</p>
        {children}
      </>
    );
  }
  redirect("/login");
}
