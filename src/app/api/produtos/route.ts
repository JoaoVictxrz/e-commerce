import { IProducts } from "@/interfaces/produtos";
import { NextResponse } from "next/server";

const produtos: IProducts[] = [
  {
    id: 1,
    nome: "Camiseta Peruana Masculina",
    preco: 79.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Peruans",
    descricao:
      "Camiseta tradicional Peruana, confortável e ideal para todas as ocasiões.",
    estoque: { minimo: 5, maximo: 50 },
    marca: "Peruanos",
    promocional: true,
    promocao: {
      precoPromocional: 59.9,
      inicioPromocao: new Date("2024-12-01"),
      fimPromocao: new Date("2024-12-15"),
    },
    tamanho: "M",
    dataCriacao: new Date("2024-11-01"),
    disponivel: true,
    quantidade: 20,
  },
  {
    id: 2,
    nome: "Camisa Gola Polo Feminina",
    preco: 129.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Gola Polo",
    descricao:
      "Elegante camisa gola polo feminina, perfeita para ocasiões casuais.",
    estoque: { minimo: 10, maximo: 100 },
    marca: "PoloStyle",
    promocional: false,
    promocao: {},
    tamanho: "G",
    dataCriacao: new Date("2024-11-15"),
    disponivel: true,
    quantidade: 50,
  },
  {
    id: 3,
    nome: "Calça Jeans Italiana Masculina",
    preco: 199.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Italianas",
    descricao:
      "Calça jeans de corte slim, estilo italiano, com ótimo caimento.",
    estoque: { minimo: 3, maximo: 50 },
    marca: "ItaliaWear",
    promocional: true,
    promocao: {
      precoPromocional: 159.9,
      inicioPromocao: new Date("2024-11-20"),
      fimPromocao: new Date("2024-12-20"),
    },
    tamanho: "GG",
    dataCriacao: new Date("2024-10-30"),
    disponivel: true,
    quantidade: 25,
  },
  {
    id: 4,
    nome: "Shorts Jeans Feminino",
    preco: 89.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Shorts Jeans",
    descricao: "Shorts jeans feminino, ideal para o verão.",
    estoque: { minimo: 8, maximo: 60 },
    marca: "DenimStyle",
    promocional: false,
    promocao: {},
    tamanho: "M",
    dataCriacao: new Date("2024-09-25"),
    disponivel: true,
    quantidade: 30,
  },
  {
    id: 5,
    nome: "Shorts Tactel Masculino",
    preco: 69.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Short Tectel",
    descricao:
      "Shorts de tactel masculino, perfeito para atividades ao ar livre.",
    estoque: { minimo: 15, maximo: 100 },
    marca: "TactelX",
    promocional: true,
    promocao: {
      precoPromocional: 49.9,
      inicioPromocao: new Date("2024-11-10"),
      fimPromocao: new Date("2024-12-05"),
    },
    tamanho: "P",
    dataCriacao: new Date("2024-08-15"),
    disponivel: true,
    quantidade: 60,
  },
  {
    id: 6,
    nome: "Camiseta Peruana Feminina",
    preco: 79.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Peruans",
    descricao: "Camiseta feminina no estilo peruano, ideal para o verão.",
    estoque: { minimo: 4, maximo: 40 },
    marca: "Peruanas",
    promocional: true,
    promocao: {
      precoPromocional: 69.9,
      inicioPromocao: new Date("2024-12-01"),
      fimPromocao: new Date("2024-12-31"),
    },
    tamanho: "M",
    dataCriacao: new Date("2024-11-10"),
    disponivel: true,
    quantidade: 20,
  },
  {
    id: 7,
    nome: "Camisa Gola Polo Masculina",
    preco: 139.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Gola Polo",
    descricao: "Camisa gola polo masculina, confortável e estilosa.",
    estoque: { minimo: 10, maximo: 80 },
    marca: "PoloMan",
    promocional: false,
    promocao: {},
    tamanho: "G",
    dataCriacao: new Date("2024-10-05"),
    disponivel: true,
    quantidade: 40,
  },
  {
    id: 8,
    nome: "Calça Jeans Italianas Feminina",
    preco: 219.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Italianas",
    descricao: "Calça jeans feminina com estilo italiano, caimento perfeito.",
    estoque: { minimo: 5, maximo: 40 },
    marca: "ItalyFashion",
    promocional: true,
    promocao: {
      precoPromocional: 189.9,
      inicioPromocao: new Date("2024-11-05"),
      fimPromocao: new Date("2024-12-10"),
    },
    tamanho: "GG",
    dataCriacao: new Date("2024-09-25"),
    disponivel: true,
    quantidade: 15,
  },
  {
    id: 9,
    nome: "Shorts Jeans Infantil",
    preco: 59.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Shorts Jeans",
    descricao: "Shorts jeans infantil, confortável e ideal para brincadeiras.",
    estoque: { minimo: 10, maximo: 50 },
    marca: "BabyJeans",
    promocional: false,
    promocao: {},
    tamanho: "M",
    dataCriacao: new Date("2024-10-10"),
    disponivel: true,
    quantidade: 20,
  },
  {
    id: 10,
    nome: "Shorts Tactel Feminino",
    preco: 79.9,
    imagem: "https://static.pingendo.com/cover-bubble-dark.svg",
    categoria: "Short Tectel",
    descricao: "Shorts de tactel feminino, perfeito para passeios ao ar livre.",
    estoque: { minimo: 5, maximo: 30 },
    marca: "TactelFem",
    promocional: true,
    promocao: {
      precoPromocional: 59.9,
      inicioPromocao: new Date("2024-11-15"),
      fimPromocao: new Date("2024-12-10"),
    },
    tamanho: "G",
    dataCriacao: new Date("2024-08-20"),
    disponivel: true,
    quantidade: 10,
  },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const isNew = url.searchParams.get("new");
  const categoria = url.searchParams.get("categoria");

  let produtosFiltrados = [...produtos];

  if (categoria) {
    produtosFiltrados = produtosFiltrados.filter(
      (produto) => produto.categoria.toLowerCase() === categoria.toLowerCase(),
    );
    return NextResponse.json(produtosFiltrados);
  }

  if (isNew === "true") {
    const novosItens = [...produtos].sort((a, b) => {
      const dateA = a.dataCriacao ?? new Date(0);
      const dateB = b.dataCriacao ?? new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
    return NextResponse.json(novosItens);
  }

  return NextResponse.json(produtos);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  produtos.splice(
    produtos.findIndex((item) => item.id === parseInt(id!)),
    1,
  );
  return NextResponse.json(produtos);
}
