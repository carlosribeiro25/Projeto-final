import Logo from '../Logo';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>

      <div className='container-form ml-10 shadow-xl p-10 flex justify h-20 pl-10'>
        <Logo />
      </div>

      <br /><br />
      {/* <section  className=' bg-black justify-content-center'> */}

        <div className="bg-white w-100 h-80 p-8 border border-red-500  ml-8 col-end-4">


          <form action="" method="post">
            <div className="text-center">
              <h1 className='text-3xl font-bold mb-4'>Acesse sua conta</h1>
            </div>

            <div className='mb-4 text-sm'>
              <p>
                Novo Cliente? Então registre-se{' '}
                <Link to="/cadastro" className="text-blue-500 underline">aqui</Link>
              </p>
            </div>

            <div className="mb-4">
              <label className='label-text text-sm font-bold text-black' htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className='w-full rounded-sm bg-gray-200 h-10 pl-4 mt-1'
                placeholder='Insira seu login ou email...'
                required
              />
            </div>

            <div className="mb-4">
              <label className='label-text text-sm font-bold text-black' htmlFor="senha">
                Senha*
              </label>
              <input
                id="senha"
                type="password"
                className='w-90 rounded-sm bg-gray-200 h-10 pl-4 mt-1 ml-4'
                placeholder='Insira sua senha...'
                required
              />
            </div>

            <div className="mb-4 text-sm">
              <Link to="/recuperar-senha" className="text-blue-500 underline">
                Esqueci minha senha
              </Link>
            </div>

            <button
              type="submit"
              className='font-semibold h-8 ml-8 mt-10  tracking-wide text-sm w-70 text-white bg-pink-600 py-2 rounded-sm hover:bg-pink-700 transition-colors'
            >
              Acessar conta
            </button>

            <br />

            <div className='flex justify-center items-center gap-4 mt-4 text-sm'>
              <p>Ou faça login com</p>
              <Icon icon="logos:google-gmail" width={20} height={20} className='cursor-pointer' />
              <Icon icon="logos:facebook" width={20} height={20} className='cursor-pointer' />
            </div>
          </form>
        </div>

      {/* </section> */}

      
    </>
  );
}
