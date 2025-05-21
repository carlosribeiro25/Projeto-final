import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h2 className="footer-title">Digital Store</h2>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Informação</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h2 className="footer-title">Institucional</h2>
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
                            <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota,</p>
                            <p>Fortaleza - CE, 60150-161</p>
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
