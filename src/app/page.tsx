import Footer from "@/components/footer";
import ImagemInicial from "@/components/imagem-inicial";
import Novidades from "@/components/novidades";

export default function Home() {
  return (
    <main>
      <ImagemInicial />
      <div className="flex flex-col gap-5">
        <Novidades />
        <Footer />
      </div>
    </main>
  );
}
