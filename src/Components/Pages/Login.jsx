import Logo from '../Logo';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Login() {
  return (
    <>

      <div className='bg-white PS-8 justify-center  shadow-xl p-10 ml-8 flex  h-20 '>
           < Logo />
      </div>

      <br /><br />
        
      <section  className=' flex   min-h-screen justify-around'> 
        <div className="bg-white mx-auto max-w-md py-8 px-10 h-80 p-8 flex  shadow-2xl  ">
          <form action="" className='justify-around' method="post">
            <div className="text-center">
              <h1 className='text-3xl font-bold mb-4'>Acesse sua conta</h1>
            </div>

            <div className='mb-6 text-sm'>
              <p className='font-semibold'>
                Novo Cliente? Então registre-se{' '}
                <Link to="/cadastro" className="text-blue-500 underline">aqui</Link>
              </p>
            </div>

            <div className='mb-4'>
              <label className='label-text text-shadow-emerald-100 font-bold text-black' htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className='w-full rounded-sm bg-gray-200 h-10 pl-4 mb-2 mt-8'
                placeholder='Insira seu login ou email...'
                required
              />
              </div>

            <div className='mb-4'>
              <label className='label-text text-shadow-amber-600 font-bold text-black' htmlFor="senha">
                Senha*
              </label>
              <input
                id="senha"
                type="password"
                className='w-full appearance-none block px-4 py-3 leading-tight text-gray-700 focus:bg-white rounded-sm bg-gray-200 h-10 pl-4 mt-1 '
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
              <p className='font-semibold'>Ou faça login com</p>
              <Icon icon="logos:google-gmail" width={20} height={20} className='cursor-pointer' />
              <Icon icon="logos:facebook" width={20} height={20} className='cursor-pointer' />
            </div>
          </form>
        </div>
        
        <img src="https://bruno-gsilva.github.io/Drip_Store/DripStore_login/resources/images/shoes01.png" 
        width={350}
        height={250}
        alt="shoes login digital college" />
         <img src="https://bruno-gsilva.github.io/Drip_Store/DripStore_login/resources/images/shoes02.png" 
        width={350}
        height={250}
        
        alt="shoes login digital college" />
     

       </section> 

       <Footer/>

      
    </>
  );
}
