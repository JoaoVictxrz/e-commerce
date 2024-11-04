"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Busca = () => {
  const [busca, setBusca] = useState("");

  const buscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    localStorage.setItem("categoriaAtiva", "null");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="items- relative flex w-auto">
      <input
        type="text"
        value={busca}
        onChange={buscar}
        placeholder="Pesquisar"
        className="w-full rounded-sm border border-zinc-300 bg-zinc-100 p-3 pr-10 text-gray-700 placeholder-gray-500 focus:border-zinc-900 focus:outline-none md:w-[600px]"
      />
      <Link
        href={{ pathname: "/produtos", query: { query: busca } }}
        passHref
        legacyBehavior
      >
        <button
          type="submit"
          className="absolute right-0 flex h-full items-center justify-center rounded-sm bg-zinc-900 p-2 text-white hover:bg-zinc-800"
        >
          <CiSearch size={24} />
        </button>
      </Link>
    </form>
  );
};

export default Busca;
