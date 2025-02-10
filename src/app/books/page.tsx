import { books } from "@/app/model/books";
import { columns } from "@/app/model/columns";
import { DataTable } from "@/app/model/data.table";
import Header from "@/components/custom/Header";

import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full font-sans text-gray-500 overflow-hidden ">
      <Header />
      <main className="h-screen w-full px-32">
        <div className="pt-12">
          {" "}
          <h1 className="font-display text-4xl text-black  mb-2">
            Livros disponíveis
          </h1>{" "}
          <h2 className="text-base mb-6">
            Pesquise e solicite qualquer livro da nossa coleção
          </h2>
          <DataTable columns={columns} data={books} />
        </div>
      </main>
    </div>
  );
};

export default page;
