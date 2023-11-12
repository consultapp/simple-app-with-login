"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { selectIsAuth } from "store/entities/auth/selectors";
import AuthForm from "./AuthForm";

export default function AuthController({ children }) {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return children;
  }

  return <AuthForm />;
}
