import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

 

  return (
    <div className="flex items-left border border-gray-300 rounded-3xl px-9 py-2 w-full max-w-md shadow-sm">
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="flex-grow  outline-none bg-transparent text-base"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="ml-2 text-gray-300 hover:text-black">
        <Search className="w-5 h-8" />
      </button>
    </div>
  );
}
