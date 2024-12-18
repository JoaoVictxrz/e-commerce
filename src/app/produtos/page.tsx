"use client";
import { useEffect, useState } from "react";
import { IMenuItems } from "@/interfaces/navbar-items";
import { IProducts } from "@/interfaces/produtos";
import Image from "next/image";
import { Container } from "@/components/container";

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
        <div className="flex h-full w-full flex-col md:flex-row">
          {/* Barra lateral de pesquisa */}
          <div className="custom-scrollbar flex h-1/4 w-full items-center overflow-x-auto overflow-y-hidden md:h-full md:w-1/4 md:flex-col md:overflow-hidden">
            {categorias.map((item) => (
              <div
                key={item.id}
                className={`z-0 ml-5 flex min-w-[150px] cursor-pointer justify-start gap-2 py-2 text-sm font-medium uppercase transition-all hover:scale-110 md:hover:pl-5 ${
                  item.id === categoriaAtiva
                    ? "scale-105 font-semibold md:pl-5"
                    : ""
                }`}
                onClick={() => handleCategoriaClick(item.id)}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Área de exibição de produtos */}
          <div className="custom-scrollbar grid w-full items-center gap-5 overflow-hidden overflow-y-auto p-4 py-4 pb-5 sm:grid-cols-2 md:w-3/4 xl:grid-cols-3">
            {produtos?.map((item, i) => (
              <div
                className="m-2 flex flex-col items-center justify-between rounded border py-5 shadow-[rgba(0,0,5,0.2)_2px_4px_2px_0px] transition-transform hover:scale-110 hover:cursor-pointer"
                key={i}
              >
                <div className="m-2 h-72 w-64 bg-black">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-1/4 flex-col justify-between border-t-2 border-gray-300 py-2">
                  <div className="mx-auto line-clamp-1 h-2/4 w-auto text-center text-xl font-bold">
                    {item.nome}
                  </div>
                  <div className="h-2/4 pb-2 text-center text-xl font-medium">
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
