import { cookies } from "next/headers";

export function getCarrinhoService() {
  const cookieStore = cookies();
  const carrinho = cookieStore.get("carrinho")?.value || "[]";
  return JSON.parse(carrinho);
}
