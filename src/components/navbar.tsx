"use client";
import { useEffect, useState } from "react";
import { IoCart, IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Busca from "./busca";
import { IProducts } from "@/interfaces/produtos";

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
    {
      id: 3,
      name: "sobre nós",
      path: "/sobre-nos",
    },
    {
      id: 4,
      name: "contato",
      path: "/contato",
    },
  ];

  const handleCategoriaClick = (id: number, path: string) => {
    setCategoriaAtiva(id);
    localStorage.setItem("categoriaAtiva", `${categoriaAtiva}`);
    if (path === "#novidades") {
      router.push(`/${path}`);
    } else {
      router.push(path); // Redireciona para outras rotas normalmente
    }
  };

  const handleNullClick = () => {
    localStorage.setItem("categoriaAtiva", "null");
  };

  useEffect(() => {
    try {
      const handleCartUpdate = () => {
        const cart = JSON.parse(localStorage.getItem("carrinho") || "[]");

        if (!Array.isArray(cart)) {
          console.error("cart is not an array");
          setQuantityCart(0);
          return;
        }
        const totalItemCart = cart
          .map((item: IProducts) => item.quantidade || 0)
          .reduce((a, b) => a + b, 0);
        setQuantityCart(totalItemCart);
      };
      handleCartUpdate();
      window.addEventListener("cartUpdated", handleCartUpdate);
      return () => {
        window.removeEventListener("cartUpdated", handleCartUpdate);
      };
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
    <header className="w-full text-black shadow-md md:w-40">
      <nav className="fixed z-50 w-full bg-white">
        <div>
          {open ? (
            <div className="flex w-full items-center justify-between gap-2 px-1 py-2 opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="w-full">
                <Busca />
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="hover:cursor-pointer"
              >
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
                <div className="hover:cursor-pointer md:hidden">
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
