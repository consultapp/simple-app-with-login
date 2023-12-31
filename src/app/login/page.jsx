"use client";

import AuthForm from "components/Authentification/AuthForm";

import { useSelector } from "react-redux";
import { selectIsAuth } from "store/entities/auth/selectors";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    router.push("/profile");
    return <p>Переход на страницу профиля</p>;
  }

  return <AuthForm />;
}
