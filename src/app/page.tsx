import ImagemInicial from "@/components/imagem-inicial";
import Novidades from "@/components/novidades";
import Produtos from "@/components/produtos";

export default function Home() {
  return (
    <main>
      <ImagemInicial />
      <div className="flex flex-col gap-5">
        <Novidades />
        <Produtos />
      </div>
    </main>
  );
}
