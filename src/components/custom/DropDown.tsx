import React from "react";

const DropDown = () => {
  return (
    <select className="h-14 w-[10%] border border-gray-300 rounded-md">
      <option value="">Todas as categorias</option>
      <option value="Ficção">Ficção</option>
      <option value="Romance">Romance</option>
      <option value="Fantasia">Fantasia</option>
    </select>
  );
};

export default DropDown;
