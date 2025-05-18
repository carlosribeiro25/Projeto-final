import "./ProductListing.css"

export default function ProductListing() {
    return (
        <>
        <ul>
            <li>
            <div className="product-list">
            <h3 className="text-xl font-medium text-black dark:text-white ">Filtrar por</h3>
            <div className="product-marcas">
              <input type="checkbox" name="Nike" id="" />
              <label htmlFor="">Adidas</label>
               <input type="checkbox" name="" id=""/>
               <label htmlFor="">Nike</label>
                <input type="checkbox" name="Nike" id="" />
                <label htmlFor="">Puma </label>
                 <input type="checkbox" name="" id="" />
                  
            </div>
            
        </div>

            </li>
        </ul>
        
         </>


    )
}