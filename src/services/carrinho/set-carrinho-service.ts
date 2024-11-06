import { cookies } from "next/headers";
import { ICarrinho } from "@/interfaces/carrinho";

export function setCarrinho(carrinho: ICarrinho[]) {
  cookies().set("carrinho", JSON.stringify(carrinho), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
