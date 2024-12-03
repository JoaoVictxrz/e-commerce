import { ICarrinho } from "@/interfaces/carrinho";
import { cookies } from "next/headers";

export async function getCarrinhoService(): Promise<ICarrinho[]> {
  const cookieStore = await cookies();
  const carrinho = cookieStore.get("carrinho")?.value || "[]";

  try {
    const parsedCarrinho = JSON.parse(carrinho);
    return Array.isArray(parsedCarrinho) ? parsedCarrinho : [];
  } catch {
    return [];
  }
}
