"use client";
import { useEffect, useState } from "react";
import { IoCart, IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Busca from "./busca";

interface INavbarItems {
  id: number;
  name: string;
  path: string;
}

const Navbar = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<number | null>(null);
  const [quantityCart, setQuantityCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navbarItems: INavbarItems[] = [
    {
      id: 1,
      name: "Produtos",
      path: "/produtos",
    },
    {
      id: 2,
      name: "novidades",
      path: "#novidades",
    },
  ];
  const fetchCarrinho = async () => {
    const response = await fetch("/api/carrinho");
    const data = await response.json();
    setQuantityCart(data.length);
  };

  const handleCategoriaClick = (id: number, path: string) => {
    setCategoriaAtiva(id);
    if (path === "#novidades") {
      router.push(`/${path}`); // Redireciona para a rota raiz com o hash
    } else {
      router.push(path); // Redireciona para outras rotas normalmente
    }
  };

  const handleNullClick = () => {
    localStorage.setItem("categoriaAtiva", "null");
  };

  useEffect(() => {
    try {
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
    <header className="sticky top-0 z-50 w-full bg-white text-black shadow-md">
      <nav className="w-full">
        <div>
          {open ? (
            <div className="flex w-full items-center justify-between gap-2 px-1 py-2 opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="w-full">
                <Busca />
              </div>
              <div onClick={() => setOpen(!open)}>
                <IoCloseOutline size={32} color="black" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b border-zinc-300 p-4 opacity-100 transition-opacity duration-300 ease-in-out">
              <Link
                href={"/"}
                onClick={() => (handleNullClick(), setCategoriaAtiva(null))}
              >
                HS_STORRR
              </Link>
              <div className="hidden md:flex">
                <Busca />
              </div>
              <div className="flex items-center gap-2">
                {/* Busca */}
                <div className="md:hidden">
                  <CiSearch size={30} onClick={() => setOpen(!open)} />
                </div>
                {/* Carrinho */}
                <Link href={"/carrinho"} className="relative">
                  <IoCart size={30} />
                  {quantityCart > 0 && (
                    <span className="absolute -right-0 -top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {quantityCart}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="w-full overflow-hidden">
          {loading ? null : (
            <div className="custom-scrollbar flex space-x-4 overflow-x-auto px-4 py-2 text-sm md:justify-center md:space-x-6">
              {navbarItems.map((item) => (
                <button
                  key={item.id}
                  className={`whitespace-nowrap font-semibold uppercase ${
                    item.id === categoriaAtiva
                      ? "border-b border-zinc-500 text-zinc-500"
                      : ""
                  }`}
                  onClick={() => handleCategoriaClick(item.id, item.path)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
