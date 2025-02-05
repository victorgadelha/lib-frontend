import DropDown from "@/components/custom/DropDown";
import Header from "@/components/custom/Header";
import SearchBar from "@/components/custom/SearchBar";

import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full font-sans text-gray-500">
      <Header />
      <main className="h-screen w-full">
        <div className="pt-12 pl-12 pr-12">
          {" "}
          <h1 className="font-display text-4xl text-black  mb-2">
            Livros disponíveis
          </h1>{" "}
          <h2 className="text-base">
            Pesquise e solicite qualquer livro da nossa coleção
          </h2>
          <div className="flex items-center gap-6 mt-8 border border-gray-300 p-3">
            {" "}
            <SearchBar />
            <DropDown />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
