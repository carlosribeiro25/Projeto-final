import './Header.css';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Navegation from '../Navegation';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Carrinho from '../Carrinho';

export default function Header() {
    return (
        <header className="header flex  h-50 items-center text-center p-4 shadow-md">
            <Logo />
            <SearchBar />
            <div className="link-login flex items-center gap-2">
                <Link className="btn-cadastro underline" to="/cadastro">Cadastre-se</Link>
                <Link className="btn-login" to="/login">Entrar</Link>               
                <Link to="/carrinho"><Icon icon="mdi-light:cart" className='font-semibold' color="#C92071" width="40" height="40" /></Link>
            </div>
            
            <Navegation />
        </header>
    );
}
