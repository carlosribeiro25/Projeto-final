import { NavLink } from "react-router-dom";
const Navegation = () => {
  return (
    <>
      <nav className="flex gap-8 mt-4 text-lg font-bold">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-[#C92071]  border-b-2 border-[#C92071] pb-1"
              : "text-gray-700 hover:text-[#C92071] pb-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Produtos"
          className={({ isActive }) =>
            isActive
              ? "text-[#C92071] border-b-2 border-[#C92071] pb-1"
              : "text-gray-700 hover:text-[#C92071] pb-1"
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/Categorias"
          className={({ isActive }) =>
            isActive
              ? "text-[#C92071] border-b-2 border-[#C92071] pb-1"
              : "text-gray-700 hover:text-[#C92071] pb-1"}>
          Categorias
        </NavLink>
        <NavLink
          to="/Meuspedidos"
          className={({ isActive }) =>
            isActive
              ? "text-[#C92071] border-b-2 border-[#C92071] pb-1"
              : "text-gray-700 hover:text-[#C92071] pb-1"
          }
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </>
  );
};

export default Navegation;
