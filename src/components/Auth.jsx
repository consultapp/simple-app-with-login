"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function Auth({ children }) {
  let isAuth = false;

  if (typeof window !== "undefined") {
    isAuth = localStorage.getItem("auth");
  }

  // const isAuth = localStorage.getItem("auth");

  if (isAuth) {
    <div>
      <p>Auth TRUE</p>
      {children}
    </div>;
  }

  redirect("/login");
}
