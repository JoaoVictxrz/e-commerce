import Carrosel from "@/components/carrossel";
import ImagemInicial from "@/components/imagem-inicial";
import Products from "@/components/products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ImagemInicial />
      <Products />
    </main>
  );
}
