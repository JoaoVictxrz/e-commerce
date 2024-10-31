"use client";
import { useEffect, useState } from "react";
import { IMenuItems } from "@/interfaces/navbar-items";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [categorias, setCategorias] = useState<IMenuItems[]>([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [categoriaAtiva, setCategoriaAtiva] = useState<number | null>(null);

  const formatar = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toLocaleLowerCase() + word.slice(1))
      .join("-");
  };

  const fetchCategorias = async () => {
    const response = await fetch("/api/categorias");
    const data = await response.json();
    setCategorias(data);
  };
  const fetchCarrinho = async () => {
    const response = await fetch("/api/carrinho");
    const data = await response.json();
    setQuantityCart(data.length);
  };

  const handleCategoriaClick = (id: number) => {
    setCategoriaAtiva(id);
    localStorage.setItem("categoriaAtiva", id.toString());
  };

  useEffect(() => {
    try {
      fetchCategorias();
      fetchCarrinho();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const categoriaSalva = localStorage.getItem("categoriaAtiva");
    if (categoriaSalva) {
      setCategoriaAtiva(Number(categoriaSalva));
    }
  }, []);

  return (
    <header className="sticky flex w-full items-center justify-center bg-white text-black">
      <nav className="sticky top-0 w-full">
        <div className="flex w-full items-center justify-between border-b border-zinc-300 bg-white p-4">
          <Link href={"/"} onClick={() => setCategoriaAtiva(null)}>
            HS_STORRR
          </Link>
          {loading ? null : (
            <Link href={"/carrinho"} className="relative">
              <IoCart size={30} />
              {quantityCart > 0 && (
                <span className="absolute -right-0 -top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {quantityCart}
                </span>
              )}
            </Link>
          )}
        </div>
        <div className="w-full overflow-hidden">
          {loading ? null : (
            <div className="custom-scrollbar flex space-x-4 overflow-x-auto px-4 py-2 text-sm md:justify-center md:space-x-6">
              {categorias.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/produtos/${formatar(item.name)}`}
                  className={`whitespace-nowrap font-semibold uppercase ${
                    item.id === categoriaAtiva
                      ? "border-b border-zinc-500 text-zinc-500"
                      : ""
                  }`}
                  onClick={() => handleCategoriaClick(item.id)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
