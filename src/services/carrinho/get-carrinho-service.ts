import { cookies } from "next/headers";

export async function getCarrinhoService() {
  const cookieStore = await cookies();
  const carrinho = cookieStore.get("carrinho")?.value || "[]";
  return JSON.parse(carrinho);
}
