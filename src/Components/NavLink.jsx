import { Link } from "react-router-dom";
 const NavLink = () => {
    return (
         <nav className="mt-1 block text-lg leading-tight font-medium text--primary :#C92071; ">
            <Link className="link-nav " to="/">Home</Link>
            <Link className="link-nav" to="/Produtos">Produtos</Link>
            <Link className="link-nav"  to="/categorias">Categorias</Link>
            <Link className="link-nav"  to="/meuspedidos">Meus Pedidos</Link>
            
        </nav>
    )
}
export default NavLink;