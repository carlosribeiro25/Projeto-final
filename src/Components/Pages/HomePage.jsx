export default function HomePage() {
  return (
    <section>
      <div className="container-products p-4">
        <div className="filter space-y-2">
          <p className="font-bold ; ">Filtrar por</p>

          {/* MARCAS */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
            />
            <span>Adidas</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
            />
            <span>Jordan</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
            />
            <span>Nike</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="marca"
              className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
            />
            <span>Puma</span>
          </label>

          <p className="font-bold">Categoria</p>
          {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="categoria"
                className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
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
                className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 checked:bg-green-500 checked:border-green-600"
              />
              <span>{gen}</span>
            </label>
          ))}

          {/* ESTADO (RADIO) */}
          <h3 className="font-bold">Estado</h3>
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
  );
}
