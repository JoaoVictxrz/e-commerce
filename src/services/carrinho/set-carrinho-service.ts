import { cookies } from "next/headers";
import { ICarrinho } from "@/interfaces/carrinho";

export async function setCarrinho(carrinho: ICarrinho[]) {
  await cookies().set("carrinho", JSON.stringify(carrinho), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  });
}
