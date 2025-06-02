import { TwitterLogo , InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import LogoFooter from '../LogoFooter';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-links">
                         <LogoFooter/>  
                        
                    <p className=" max-w-2xs">
                           Lorem, ipsum dolor sit amet consectetur ad
                           ipisicing elit. Distinctio beatae cum
                           , alias rerum quidem quae a. Asperiores
                            laborum commodi tenetur animi,a,inaiiiii 
                            
                             </p>
                             <div className="rede-social flex flex-row gap-4">                                                                  
                                     <FacebookLogo size={36} />
                                        <InstagramLogo size={36} />   
                                        <TwitterLogo size={36} />
                             </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h2 className="footer-title">Informação</h2>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Sobre Drip Store</a>
                            <a href="#" className="footer-link">Segurança</a>
                            <a href="#" className="footer-link">Wishlist</a>
                            <a href="#" className="footer-link">Blog</a>
                            <a href="#" className="footer-link">Trabalhe conosco</a>
                            <a href="#" className="footer-link">Meus Pedidos</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h2 className="footer-title">Categorias</h2>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Camisetas</a>
                            <a href="#" className="footer-link">Calças</a>
                            <a href="#" className="footer-link">Bonés</a>
                            <a href="#" className="footer-link">Headphones</a>
                            <a href="#" className="footer-link">Tênis</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h2 className="footer-title">Contato</h2>
                        <div className="contact-info">
                            <p>Av. Santos Dumont, 1510 - 1</p> 
                            <p>andar - Aldeota,Fortaleza -</p>
                            <p> CE, 60150-161</p>
                            <p>(85) 3051-3411</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Digital College</p>
                </div>
            </div>
        </footer>
    );
}
