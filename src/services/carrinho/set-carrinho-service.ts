import { cookies } from "next/headers";

export function setCarrinho(carrinho: any[]) {
  cookies().set("carrinho", JSON.stringify(carrinho), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
