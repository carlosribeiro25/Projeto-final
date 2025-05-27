export default function FilterGroup() {
  const marcas = ["batata", "Jordan", "Nike", "Puma"];
  const categorias = ["Esporte", "Casual", "Utilitário", "Corrida"];
  const generos = ["Masculino", "Feminino", "Unisex"];
  

  return (

    <div className="bg-white p-10 w-50 h-140 rounded-sm container-products">
      <div className="   mt-16 py-8  font-bold">
      <p >Filtrar por </p>
      </div>
<br />
        <div>
          <p className="mt-2 font-bold">Marca</p>
          {marcas.map((marca, idx) => (
            <label key={idx} className="flex items-center gap-2 ml-14 cursor-pointer">
              <input
                type="checkbox"
                name="marca"
                id={`marca-${idx}`}
                className="peer hidden"
              />
              <div className="w-5 h-5 border-2 border-gray-300 rounded-sm peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white  peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{marca}</span>
            </label>
          ))}
        </div>

        <br />
        <div>
          <p className="font-bold">Categoria</p>
          {categorias.map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="categoria"
                className="peer hidden"
              />
              <div className="w-5 h-5 border-2 border-gray-400 rounded-sm peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white  peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{cat}</span>
            </label>
          ))}
        </div>
        <br />

        <div>
          <p className="font-bold">Gênero</p>
          {generos.map((gen, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="genero"
                className=" ml-10 peer hidden"
              />
              <div className="w-5 h-5 border-2 border-gray-400 rounded-sm peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white  peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{gen}</span>
            </label>
          ))}
        </div>

      {/* Estado */}
      <br />
<div>
  <p className="font-bold">Estado</p>
  {["Novo", "Usado"].map((estado, idx) => (
    <label key={idx} className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="estado"
        className="peer hidden gap-4"
        value={estado}
      />
      <div className="w-5 h-5 border-2 border-gray-400 rounded-full peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
      </div>
      <span>{estado}</span>
    </label>
  ))}
</div>


      </div>
    
  );
}
