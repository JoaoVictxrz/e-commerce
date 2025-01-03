"use client";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { IProducts } from "@/interfaces/produtos";
import Image from "next/image";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState<IProducts[]>([]);

  const getCarrinho = () => {
    const response = localStorage.getItem("carrinho");
    setCarrinho(response ? JSON.parse(response) : []);
  };

  useEffect(() => {
    getCarrinho();
  }, []);

  return (
    <div className="h-screen w-full bg-white text-black">
      <Container className="flex h-full w-full flex-col pt-10 sm:flex-row">
        {carrinho.length > 0 ? (
          <div className="mt-15 flex w-full flex-col gap-4">
            {carrinho.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-medium">{item.nome}</p>
                  <p>Preço: R$ {item.preco.toFixed(2)}</p>
                  <p>Quantidade: {item.quantidade}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <p>O carrinho está vazio.</p>
          </div>
        )}
        <div className="w-full border-t p-4 sm:border-l sm:border-t-0">
          <h2 className="mb-4 text-lg font-bold">Resumo do pedido</h2>
          <p>Subtotal: {/* Calcule o subtotal aqui */}</p>
          <p>Frete: {/* Calcule o frete aqui */}</p>
          <p>Total: {/* Calcule o total aqui */}</p>
        </div>
      </Container>
    </div>
  );
};

export default Carrinho;
