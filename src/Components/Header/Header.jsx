import './Header.css';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Navegation from '../Navegation';


export default function Header() {
    return (
        <>
        <div className="header">
   
        <Logo/> 
        <SearchBar />
        <div className="link-login">
        <a className="btn-cadastro" href="#" role="button">Cadastre-se</a>
        <a className="btn-login" href="#" role="button">Entrar</a>
        
        <a href="">Mini-cart</a>
        </div>
        <Navegation/>
       
        
         </div>

        </>
       

    );
};
