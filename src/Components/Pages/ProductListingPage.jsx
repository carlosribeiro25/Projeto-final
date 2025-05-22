import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductListing from '../ProductListing';


export default function ProductListingPage() {
  return (
    <div>
      
      <Header />
      <h2> <strong>Resultado para "Tênis" </strong> - 389 Produtos </h2>
      <ProductListing/>
    
      <Footer />
    </div>
  );
}
