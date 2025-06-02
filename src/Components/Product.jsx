

import { useState } from "react";
import Carrinho from '../Components/Pages/Carrinho';
import { generateSessionId } from '../utils/cartUtils';
import { adicionarAoCarrinho } from "../utils/cartActions";

export default function Product() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")


const handleComprar = async () => {
  const sessionId = generateSessionId(); // cria ou obtém o ID da sessão
  const productId = 7; // id fixo do produto, por enquanto
  const quantity = 1;

  try {
    await adicionarAoCarrinho(sessionId, productId, quantity);
    setIsCartVisible(true);
  } catch (error) {
    console.error("Erro ao adicionar produto ao carrinho:", error);
    alert("Erro ao adicionar produto ao carrinho");
  }
};

  return (
    <>
      <main className="produto-container">
       
     
        <div className="breadcrumb">
          <span>Home / Produto / Tenis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</span>
        </div>

        {/* Grid do Produto */}
        <div className="produto-grid">
          {/* Imagem do Produto */}
          <div className="produto-imagem-container">
          
          </div>

          {/* Informações do Produto */}
          <div className="produto-info">
            <h1 className="produto-titulo">Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p className="produto-referencia">Casual | Nike | REF:38416711</p>

            {/* Avaliações */}
            <div className="produto-avaliacoes">
              <span className="avaliacao-score">4.7★</span>
              <span className="avaliacao-texto">(90 avaliações)</span>
              <span className="avaliacao-estrelas">★★★★☆</span>
            </div>

            {/* Preços */}
            <div className="produto-precos">
              <p className="preco-antigo">R$ 219,00</p>
              <p className="preco-atual">R$ 219,00</p>
            </div>

            {/* Descrição */}
            <div className="produto-descricao">
              <p className="descricao-titulo">Descrição do produto</p>
              <p className="descricao-texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Seleções */}
            <div className="produto-selecoes">
              {/* Tamanhos */}
              <div className="selecao-grupo">
                <p className="selecao-titulo">Tamanhos:</p>
                <div className="tamanhos-container">
                  {["39", "40", "41", "42"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`tamanho-btn ${selectedSize === size ? "selecionado" : ""}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cores */}
              <div className="selecao-grupo">
                <p className="selecao-titulo">Cores:</p>
                <div className="cores-container">
                  {["#000", "#666", "#999", "#ccc"].map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`cor-btn ${selectedColor === color ? "selecionado" : ""}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Botão Comprar */}
            <button onClick={handleComprar} className="btn-comprar">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="produtos-relacionados">
          <div className="relacionados-header">
            <p className="relacionados-titulo">Produtos relacionados</p>
            <a className="ver-todos-link">ver todos</a>
          </div>
          <div className="relacionados-grid">
            <div className="produto-relacionado">
              <img
                src="https://drip-store.netlify.app/assets/images/trending-products/product-image.png"
                alt="Produto relacionado"
              />
              <p>Tênis Nike-13 Feminino</p>
            </div>
          </div>
        </div>
      </main>

      {/* Carrinho */}
      <Carrinho isVisible={isCartVisible} onClose={() => setIsCartVisible(false)} />
       
    </>
  )
}
