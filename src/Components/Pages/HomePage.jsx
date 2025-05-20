export default function HomePage() {
  return (
    <section>
      <div className="container-products p-10">
        <div className="filter space-y-2">
          <p className="font-bold ; ">Filtrar por</p>
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

          <p className="font-bold">Categoria</p>
          {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="categoria"
                className="w-5 h-5"
              />
              <span>{cat}</span>
            </label>
          ))}

         
          <p className="font-bold">Gênero</p>
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

          
          <p className="font-bold">Estado</p>
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
    
  )
}
