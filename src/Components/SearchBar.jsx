import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(query.trim())}`);
      
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-left border border-gray-300 rounded-2xl px-4 py-4  w-md shadow-sm">
      <input
        type="text"  style={{ textIndent: '1.2rem' }}
        placeholder="Buscar produtos..."
        className=" flex-grow h-12 p-80 ml-2 outline-none bg-transparent text-base"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="ml-2 w-10 text-gray-400 hover:text-#474747 cursor-pointer">
        <Search className="w-6 h-6 mr-2" />
      </button>
    </div>
  );
}
