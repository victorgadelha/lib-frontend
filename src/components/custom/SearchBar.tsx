import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <Input
      className="w-[90%] h-14 p-5"
      placeholder="Pesquise pelo nome do livro ou autor..."
    />
  );
};

export default SearchBar;
