 import "./Section2.css";

 
 export default function Section2() {
  const novaaba = (event, destino) => {
    
    window.open(`/${destino}`, '_blank');
  };
  return (   
      <div className="cards-container">
        <div className="card1">
          <div className="card1-content">
            <h5 className="percent">30% OFF</h5>
            <h1 className="titulo">Novo drop</h1><br/>
            <h1 className="titulo">supreme</h1>
            <div className="card1-btn">
              <button className="btnbranco" onClick={(e) => novaaba(e, 'produtos')}>Comprar</button>
            </div>
            <div className="card1-image">
              <img src="https://manoel653.github.io/novo/imagens/camisa.png" alt="camisa" width={400} height="200" draggable="false" />
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <h5 className="percent">30% OFF</h5>
            <h1 className="titulo">Coleção</h1><br />
            <h1 className="titulo" > Adidas </h1>
            <div className="card1-btn">
              <button className="btnbranco" onClick={(e) => novaaba(e, 'produtos')}>Comprar</button>
            </div>
            <div className="card2-image">
              <img src="https://manoel653.github.io/novo/imagens/shoes2.png" alt="shoes2" width="200" height="20" draggable="false" />
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="card3-content">
            <h5 className="percent">30% OFF</h5>
            <h1 className="titulo">Novo<br />Beats Bass</h1>
            <div className="card1-btn">
              <button className="btnbranco" onClick={(e) => novaaba(e, 'produtos')}>Comprar</button>
            </div>
            <div className="card3-image">
              <img src="https://manoel653.github.io/novo/imagens/headphone.png" alt="headphone" width="200" height="200" draggable="false" />
            </div>
          </div>
        </div>
      </div>    
  );
};
