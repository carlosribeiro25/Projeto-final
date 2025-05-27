import Footer from '../Footer/Footer';
import Logo from '../Logo';

export default function Cadastro() {
  return (
    <>
    <div className='bg-white flex justify-center h-20'>
        <Logo/>
    </div>
    <br />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 p-4">
        <section className="w-full max-w-3xl mb-4">
          <h2 className="font-bold text-2xl  mb-8">Criar conta</h2>

          {/* Formulário de Informações Pessoais */}
          <div className="bg-white p-6 rounded shadow mb-6">
            <p className="text-xl font-semibold mb-4">Informações Pessoais</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                <input type="text" placeholder="Insira seu nome" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
                <input type="text" placeholder="Insira seu CPF" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                <input type="email" placeholder="Insira seu email" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
                <input type="tel" placeholder="Insira seu celular" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>
            </form>
          </div>

          {/* Formulário de Informações de Entrega */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
            <hr />
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Endereço *</label>
                <input type="text" placeholder="Insira seu endereço" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bairro *</label>
                <input type="text" placeholder="Insira seu bairro" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cidade *</label>
                <input type="text" placeholder="Insira sua cidade" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">CEP *</label>
                <input type="text" placeholder="Insira seu CEP" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                <input type="text" placeholder="Insira complemento" className="w-full bg-gray-200 px-3 py-2 h-10 rounded" />
              </div>
              <br />
                <br />
                
              <div className=' bg-gray-200 '>
                <input type="checkbox" name="" id="" /> <label htmlFor=""> Quero receber por email ofertas e novidades das lojas da 
                    Digital story. A frequência de envios pode varias de acordo com a iteração do cliente.
                </label>
              </div>
              
              <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
}
