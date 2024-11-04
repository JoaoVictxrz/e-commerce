"use client";
import { IProducts } from "@/interfaces/produtos";
import { Container } from "./container";

const Products = () => {
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

  return (
    <div className="h-screen w-full bg-black">
      <Container>
        <div className="flex w-full items-center justify-between px-2 pt-2">
          <div className="text-xl uppercase">Produtos</div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-5 md:grid-cols-4"></div>
      </Container>
    </div>
  );
};

export default Products;
