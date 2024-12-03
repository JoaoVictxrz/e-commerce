"use client";
import { IProducts } from "@/interfaces/produtos";
import { Container } from "./container";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Novidades = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [produtos, setProdutos] = useState<IProducts[]>([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const fetchProdutos = async () => {
    try {
      const response = await fetch("/api/produtos?new=true", { method: "GET" });

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();

      setProdutos(data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);
  return (
    <div className="w-full bg-white text-black">
      <Container>
        <div className="p-2 text-xl font-semibold uppercase">Novidades</div>
        <div
          className="custom-scrollbar flex gap-5 space-x-8 overflow-hidden overflow-x-auto py-4 pb-5"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {produtos.map((item, i) => (
            <div
              className="m-2 flex flex-col justify-between rounded border shadow-[rgba(0,0,5,0.2)_2px_4px_2px_0px] transition-transform hover:scale-110 hover:cursor-pointer"
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
      </Container>
    </div>
  );
};

export default Novidades;
