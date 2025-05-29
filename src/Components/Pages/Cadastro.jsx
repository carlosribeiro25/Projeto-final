import Footer from '../Footer/Footer';
import Logo from '../Logo';

export default function Cadastro() {
  return (
    <>
      <div className='bg-white flex justify-center h-20'>
        <Logo />
      </div>
      <br />
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-200 p-4">
        < div className="w-full max-w-lg mb-4 ">
          <h2 className="font-bold text-2xl  items-start mb-8">Criar conta</h2>

          <div className="bg-white  p-6 justify-items-center rounded shadow mb-8">
            <br />
            <p className="text-xl  font-light mb-4">Informações Pessoais</p>
             <form action="" method="post">
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo *</label>
                <input type="text" placeholder="Insira seu nome" style={{ textIndent: '0.5rem' }} className="w-100 ml-4 bg-gray-300 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">CPF *</label>
                <input
                  type="number"
                  placeholder="Digite seu CPF"
                  style={{ textIndent: '0.5rem' }}
                  className="w-full bg-gray-300  pr-3 py-2 h-10 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-900 mb-1">E-mail *</label>
                <input type="email" placeholder="Insira seu email" style={{ textIndent: '0.5rem' }} className="w-full bg-gray-300 px-3 py-2 h-10 rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-900 mb-1">Telefone*</label>
                <input
                  type="number"
                  placeholder="Digite seu numero de telefone" style={{ textIndent: '0.5rem' }}
                  className="w-full bg-gray-300 px-3 py-2 h-10 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  required
                />
              </div>
            </form>
            <br />


            <p className="text-xl  font-light mb-4">Informações de Entrega</p>
            <hr />
            <br />

            <form  >
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-900 mb-1">Endereço*</label>
                <input type="text" placeholder="Insira seu endereço" style={{ textIndent: '0.5rem' }} className="w-100 ml-4 bg-gray-300 px-3 py-2 h-10 rounded" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-900 mb-1">Bairro *</label>
                <input
                  type="text"
                  placeholder="Digite seu bairro"
                  style={{ textIndent: '0.5rem' }}
                  className="w-full bg-gray-300  pr-3 py-2 h-10 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1"> Cidade *</label>
                <input type="email" placeholder="Insira o nome da sua cidade" style={{ textIndent: '0.5rem' }} className="w-full bg-gray-300 px-3 py-2 h-10 rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1"> CEP *</label>
                <input
                  type="number"
                  placeholder="Digite se CEP" style={{ textIndent: '0.5rem' }}
                  className="w-full bg-gray-300 px-3 py-2 h-10 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 ">Complemento* </label>
                <input type="text" placeholder="Digite um complemento" style={{ textIndent: '0.5rem' }} className="w-100 bg-gray-300 px-3 py-2 h-10 rounded" />
              </div>

            </form>

            <br />
          </div>
          <br />

          <div className="mb-4 flex items-start gap-2">
            <input type="checkbox" className="accent-pink-500 w-4 h-4 mt-1" />
            <span className="text-xs font-medium text-gray-700">
              Aceito receber por email ofertas e novidades da loja Digital Store. <br />
              A frequência dos envios pode variar conforme minha interação.
            </span>
          </div>

          <br />
          <button type="submit" className="-tracking-2  w-full h-8 bg-pink-500 font-semibold text-white py-2 rounded hover:bg-pink-700 transition">
            Criar conta
          </button>

        </div>

      </section>
      <br />
      <br />

      <Footer />
    </>
  );
}
