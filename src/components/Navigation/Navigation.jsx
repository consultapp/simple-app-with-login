import AuthButtonsNav from "components/Authentification/AuthButtonsNav";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/news">Новости</Link>
      <Link href="/profile">Профиль</Link>
      <AuthButtonsNav />
    </nav>
  );
}
