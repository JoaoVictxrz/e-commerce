"use client";
import { Input } from "@/components/ui/input";
import { IProducts } from "@/interfaces/produtos";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

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
  const [produtosFiltrados, setProdutosFiltrados] = useState<IProducts[]>([]);
  const [busca, setBusca] = useState("");
  const [maximo, setMaximo] = useState(6);

  const buscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
    setProdutosFiltrados(
      produtos.filter((p) =>
        p.nome.toLowerCase().includes(busca.toLowerCase()),
      ),
    );
  };
  useEffect(() => {
    if (busca === "") {
      setProdutosFiltrados(produtos);
    }
  }, [produtosFiltrados]);

  return (
    <div>
      <div className="flex w-full items-center justify-between px-2 pt-2">
        <div className="text-2xl uppercase">Produtos</div>
        <form action="" className="flex items-center">
          <Input
            type="text"
            onChange={buscar}
            placeholder="Pesquisar"
            className="mr-2"
          />
          <button type="submit" value={busca}>
            <CiSearch size={30} />
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {produtosFiltrados.length > 0
          ? produtosFiltrados.map((p) => (
              <div
                key={p.nome}
                className="flex w-full flex-col items-center justify-between text-center"
              >
                <img
                  src={p.imagem}
                  alt=""
                  className="h-24 w-full object-contain"
                />
                <div className="line-clamp-2 text-xl">{p.nome}</div>
                <div className="text-xl">{p.preco}</div>
              </div>
            ))
          : produtos.map(
              (p, i) =>
                i < maximo && (
                  <div
                    key={p.nome}
                    className="flex w-full flex-col items-center justify-between text-center"
                  >
                    <img
                      src={p.imagem}
                      alt=""
                      className="h-24 w-full object-contain"
                    />
                    <div className="line-clamp-2 text-xl">{p.nome}</div>
                    <div className="text-xl">{p.preco}</div>
                  </div>
                ),
            )}
        {/* {produtos.map(
          (p, i) =>
            i < maximo && (
              <div
                key={p.nome}
                className="flex w-full flex-col items-center justify-between text-center"
              >
                <img
                  src={p.imagem}
                  alt=""
                  className="h-24 w-full object-contain"
                />
                <div className="line-clamp-2 text-xl">{p.nome}</div>
                <div className="text-xl">{p.preco}</div>
              </div>
            ),
        )} */}
      </div>
      {maximo < produtos.length ? (
        <button onClick={() => setMaximo(produtos.length)}> test</button>
      ) : (
        <button onClick={() => setMaximo(6)}>test</button>
      )}
    </div>
  );
};

export default Products;
