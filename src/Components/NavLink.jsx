import { Link } from "react-router-dom";
 const NavLink = () => {
    return (
         <nav className="mt-1 block text-lg leading-tight font-medium text--primary :#C92071; ">
            <Link to="/">Home</Link>
            <Link to="/produtos">Categorias</Link>
            <Link to="/categorias">Produtos</Link>
            <Link to="/meuspedidos">Meus Pedidos</Link>
            
        </nav>
    )
}
export default NavLink;