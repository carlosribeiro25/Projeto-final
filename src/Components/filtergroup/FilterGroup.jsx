

export default function FilterGroup() {
    return (
      <>
       
    
        <section className="container-main"> 
  
      <div className="bg-white w-60  container-products p-10 ">
        <div className=" filter space-y-2">
          <div className=" bg-yellow-400 filter font-bold text filter-title ">
            <p className="text-lg">Filtrar por</p>
          </div>
            

            <div className="marca bg-blue-400 ">
          <p className="font-bold text " >Marca</p>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5 "
            />
            <span>Adidas</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5"
            />
            <span>Jordan</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5"
            />
            <span>Nike</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5"
            />
            <span>Puma</span>
          </label>
          </div>

{/* marca acaba aqui */}

             
          <p className="font-bold  text">Categoria</p>
          {["Esporte ", "Casual", "Utilitário", "Corrida"].map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="categoria"
                className="w-5 h-5"
              />
              <span>{cat}</span>
            </label>
            

            
          ))}

         
          <p className="font-bold text">Gênero</p>
          {["Masculino", "Feminino", "Unisex"].map((gen, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="genero"
                className="w-5 h-5"
              />
              <span>{gen}</span>
            </label>
          ))}

          
          <p className="font-bold text">Estado</p>
          {["Novo", "Usado"].map((estado, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="radio"
                name="estado"
              />
              <span>{estado}</span>
            </label>
          ))}

        </div>
      </div>
    </section>
     </>

    )
}
