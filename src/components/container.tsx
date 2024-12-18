"use client";
import { useEffect, useState } from "react";
import Transition from "./transition";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>("null");
  useEffect(() => {
    const categoriaAtiva = localStorage.getItem("categoriaAtiva");
    setCategoriaAtiva(categoriaAtiva);
    if (categoriaAtiva !== "4") {
      window.scrollTo(0, 0);
    }
  }, [categoriaAtiva]);
  return (
    <Transition>
      <div className={`mx-auto h-full max-w-7xl ${className}`}>{children}</div>
    </Transition>
  );
};
