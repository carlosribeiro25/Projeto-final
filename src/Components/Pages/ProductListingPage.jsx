import FilterGroup from '../FilterGroup/FilterGroup';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import  ProductListing from '../ProductListing';
 
export default function ProductListingPage() {
  return (
    <>
      
      <Header /><br />
      
      <div className=" flex mt-4 h-20 gap-x-50  justify-around text  fz-16 bg-gray-100">
        
      <h2> <strong>Resultado para "Tênis" </strong> - 389 Produtos </h2>
      <select className="w-70 h-15 border-1  " aria-label="Default select example">
     <option selected>Alternar por: Mais relevantes </option>
     <option value="1">Menor preço</option>
     <option value="2">Maior Preço  </option>

      </select>
      </div>
      <div className=' gap-14  flex  py-4'>
        <FilterGroup/>
       
      </div>
      
      
      <br />
      <br />
      <Footer />
      
    
      
    </>
  );
}
