"use client";
import { useRef } from "react";
import { preload } from "store/entities/auth";
import { store } from "store/index";

export default function StorePreloader() {
  const ref = useRef(true);
  if (ref.current) {
    ref.current = false;
    store.dispatch(preload());
  }

  return <></>;
}
