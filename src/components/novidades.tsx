"use client";
import { IProducts } from "@/interfaces/produtos";
import { Container } from "./container";
import Image from "next/image";
import { useRef, useState } from "react";

const Novidades = () => {
  const produtos: IProducts[] = [
    {
      nome: "Camiseta Básica Feminina",
      preco: 49.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Feminino",
      promocional: false,
    },
    {
      nome: "Calça Jeans Slim Masculina",
      preco: 129.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Masculino",
      promocional: true,
    },
    {
      nome: "Jaqueta Jeans Unissex",
      preco: 199.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Unissex",
      promocional: false,
    },
    {
      nome: "Vestido Infantil Floral",
      preco: 89.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Infantil",
      promocional: true,
    },
    {
      nome: "Blusa de Moletom Unissex",
      preco: 119.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Unissex",
      promocional: false,
    },
    {
      nome: "Saia Midi Feminina",
      preco: 69.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Feminino",
      promocional: true,
    },
    {
      nome: "Short Jeans Infantil",
      preco: 59.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Infantil",
      promocional: false,
    },
    {
      nome: "Camisa Social Masculina",
      preco: 99.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Masculino",
      promocional: true,
    },
    {
      nome: "Blazer Feminino",
      preco: 149.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Feminino",
      promocional: false,
    },
    {
      nome: "Calça Legging Unissex",
      preco: 39.9,
      imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
      categoria: "Unissex",
      promocional: true,
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
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
