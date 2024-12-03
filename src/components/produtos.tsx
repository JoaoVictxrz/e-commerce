"use client";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { IMenuItems } from "@/interfaces/navbar-items";
import { IProducts } from "@/interfaces/produtos";
import Image from "next/image";

const Produtos = () => {
  const [categorias, setCategorias] = useState<IMenuItems[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState<number | null>(null);
  const [produtos, setProdutos] = useState<IProducts[]>([]);
  const [error, setError] = useState(false);

  const handleCategoriaClick = (id: number) => {
    setCategoriaAtiva(id);
    localStorage.setItem("categoriaAtiva", id.toString());
  };

  const fetchCategorias = async () => {
    const response = await fetch("/api/categorias");
    const data = await response.json();
    setCategorias(data);
  };
  const fetchProdutos = async () => {
    const response = await fetch("/api/produtos");
    const data = await response.json();
    setProdutos(data);
  };

  useEffect(() => {
    try {
      fetchCategorias();
      fetchProdutos();
    } catch (error) {
      if (error) setError(true);
    }
  }, []);

  useEffect(() => {
    const categoriaSalva = localStorage.getItem("categoriaAtiva");
    if (categoriaSalva) {
      setCategoriaAtiva(null);
    }
  }, []);

  if (error) return;
  return (
    <div className="h-screen w-full bg-white text-black">
      <Container>
        <div className="p-2 pb-10 text-xl font-semibold uppercase">
          Produtos
        </div>
        <div className="flex h-full w-full flex-1 flex-col justify-between md:flex-row">
          <div className="flex h-2/4 w-full items-center overflow-x-auto bg-yellow-200 md:max-w-40 md:flex-col md:overflow-hidden">
            {categorias.map((item) => (
              <div
                key={item.id}
                className={`z-0 flex min-w-[150px] cursor-pointer justify-center gap-2 py-2 text-sm font-medium uppercase transition-all hover:scale-110 hover:border-b-2 hover:border-zinc-500 md:hover:pl-5 ${
                  item.id === categoriaAtiva
                    ? "border-b border-zinc-500 text-zinc-500"
                    : ""
                }`}
                onClick={() => handleCategoriaClick(item.id)}
              >
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
          {/* Produtos */}
          <div className="custom-scrollbar grid items-center gap-5 overflow-hidden overflow-y-auto bg-red-500 py-4 pb-5 sm:grid-cols-2 xl:grid-cols-3">
            {produtos?.map((item, i) => (
              <div
                className="m-2 flex flex-col items-center justify-between rounded border py-5 shadow-[rgba(0,0,5,0.2)_2px_4px_2px_0px] transition-transform hover:scale-110 hover:cursor-pointer"
                key={i}
              >
                <div className="m-2 h-64 w-56 bg-black">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-1/4 flex-col justify-between pb-2">
                  <div className="h-3/4 text-center text-xl font-bold">
                    {item.nome}
                  </div>
                  <div className="h-1/4 pb-2 text-center text-xl font-medium">
                    R${item.preco}0
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Produtos;
