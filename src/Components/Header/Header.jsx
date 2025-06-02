import './Header.css';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Carrinho from '../Components/Carrinho';
import Navegation from '../Navegation';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useState } from 'react';


export default function Header() {


    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    
    return (
        <header className="header flex  h-50 items-center text-center p-4 shadow-md">
            <Logo />
            <SearchBar />
            <div className="link-login flex items-center gap-2">
                <Link className="btn-cadastro underline" to="/cadastro">Cadastre-se</Link>
                <Link className="btn-login" to="/login">Entrar</Link> 
                 <button onClick={() => setMostrarCarrinho(true)}>
                    <Icon icon="mdi-light:cart" color="#C92071" width="40" height="40" />
                </button>              
                
            </div>
            
            <Navegation />
             <Carrinho isVisible={mostrarCarrinho} onClose={() => setMostrarCarrinho(false)} />
            
        </header>
    );
}
