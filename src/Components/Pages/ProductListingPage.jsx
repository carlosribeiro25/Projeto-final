import Header from '../Header/Header';
import Footer from '../footer/Footer';
import ProductListing from '../ProductListing';

export default function ProductListingPage() {
  return (
    <>
      
      <Header />
      <div className=" flex justify-between text  fz-16 bg-gray-100">
        
      <h2> <strong>Resultado para "Tênis" </strong> - 389 Produtos </h2>
      <select className="w-80 h-15 " aria-label="Default select example">
     <option selected>Alternar por: Mais relevantes </option>
     <option value="1">Menor preço</option>
     <option value="2">Maior Preço  </option>

      </select>
      </div>
      
      <ProductListing/>
      <Footer />
      
    
      
    </>
  );
}
