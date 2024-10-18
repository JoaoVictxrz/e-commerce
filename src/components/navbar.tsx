"use client";
import { menuItems } from "@/interfaces/navbar-items";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const menuItems: menuItems[] = [
    {
      name: "Produtos",
      path: "/produtos",
    },
  ];
  const [quantityCart, setQuantityCart] = useState(1);
  return (
    <header className="sticky flex w-full items-center justify-center bg-white text-black">
      <nav className="flex w-full max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="text-2xl font-bold">
            My Portfolio
          </Link>
        </div>
        <div className="flex items-center gap-2 text-2xl text-zinc-500">
          <Link href={"/produtos"}>Produtos</Link>
          <Link
            href={"/carrinho"}
            className="flex items-center rounded-md border-2 border-zinc-500 px-2 py-1.5 text-base font-medium"
          >
            <IoCart />
            Carrinho
            {quantityCart > 0 && (
              <span className="ml-1 rounded-full border-2 border-red-500 px-2 py-1 text-xs text-red-500">
                {quantityCart}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
