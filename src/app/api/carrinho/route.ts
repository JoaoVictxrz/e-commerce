import { NextRequest, NextResponse } from "next/server";
import { getCarrinhoService } from "@/services/carrinho/get-carrinho-service";
import { setCarrinho } from "@/services/carrinho/set-carrinho-service";

export async function GET() {
  const carrinho = getCarrinhoService();
  return NextResponse.json(carrinho);
}

export async function POST(request: Request) {
  const novoItem = await request.json();
  const carrinho = await getCarrinhoService();
  carrinho.push(novoItem);
  setCarrinho(carrinho);
  return NextResponse.json(carrinho);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID não fornecido." }, { status: 400 });
  }
  let carrinho = await getCarrinhoService();
  carrinho = carrinho.filter((item) => item.produto.id !== parseInt(id));
  setCarrinho(carrinho);
  return NextResponse.json(carrinho);
}
