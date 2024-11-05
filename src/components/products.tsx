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
    <div className="h-screen w-full bg-white text-black">
      <Container>
        <div className="p-2 text-xl font-semibold uppercase">Novidades</div>
        <div className="custom-scrollbar flex space-x-4 overflow-x-auto px-4">
          {produtos.map((item, index) => (
            <div className="relative m-2" key={item.nome}>
              <div className="m-2 h-48 w-48">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">{item.nome}</div>
              <div className="text-center">{item.preco}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
