"use client";
import { useRef } from "react";
import { store } from "@/store/index";
import { preload } from "@/store/entities/auth";

export default function StorePreloader() {
  const ref = useRef(true);
  if (ref.current) {
    ref.current = false;
    store.dispatch(preload());
  }

  return <></>;
}
