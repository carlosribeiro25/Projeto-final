import Logo from '../Logo';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Login() {
  return (
    <>
      <main className='bg-gray-300'>
     <div className="pl-16"> 
    <div className='bg-white pl-8  justify-center gap-10 shadow-xl p-10 flex h-20 '>
        < Logo />
    </div>
  </div>
      <br />
      <br />
        
      <section  className=' flex  justify-around'> 
        <div className=" bg-white w-98 justify-items-center h-110 max-w-full mb-4  "><br />
          <form action=""  method="post">
            <div className="">
              <h1 className=' text-2xl font-bold mb-4'>Acesse sua conta</h1>
            </div>
            <br />

            <div className='mb-6  text-sm'>
              <p className='font-medium text-xl'>
                Novo Cliente? Então registre-se{' '}
                <Link to="/cadastro" className="text-blue-500 underline">aqui</Link>
              </p><br />
            </div>

            <div className='  mb-6'>
              <label className=' font-bold text-black' htmlFor="email">
                Email*
              </label><br />
              <input
                id="email"
                type="email"
                className='w-90 appearance-none block px-4 py-3 leading-tight text-gray-700 focus:bg-white rounded-sm bg-gray-300 h-10 pl-4 mt-1 '
                
                placeholder='Insira seu login ou email...' style={{ textIndent: '0.5rem' }}
                required
              /> 
              </div><br />


            <div className='mb-4'>
              <label className='label-text  font-bold text-black' htmlFor="senha">
                Senha*
              </label>
              <input
                id="senha"
                type="password"
                className='w-90 appearance-none block px-4 py-3 leading-tight text-gray-700 focus:bg-white rounded-sm bg-gray-300 h-10 pl-4 mt-1 '
                placeholder='Insira sua senha...' style={{ textIndent: '0.5rem' }}
                required
              />
              </div>
              <br />
              
            <div className="mb-4 text-sm">
              <Link to="/recuperar-senha" className=" text-gray-600 underline">
                Esqueci minha senha
              </Link>
            </div>
            <br />
            <button
              type="submit"
              className='font-semibold h-8 ml-8 mt-10  tracking-wide text-sm w-90 text-white bg-pink-600 py-2 rounded-sm hover:bg-pink-700 transition-colors'>
               Acessar conta</button>
              <br /><br />
            <div className='flex justify-center items-center gap-4 mt-4 text-sm'>
              <p className='font-mediun cursor-pointer'>Ou faça login com</p>
              <Icon icon="logos:google-gmail" width={30} height={30} className='cursor-pointer' />
              <Icon icon="logos:facebook" width={30} height={25} className='cursor-pointer' />
            </div>
          </form>
        </div>
  
        <img src="https://bruno-gsilva.github.io/Drip_Store/DripStore_login/resources/images/shoes01.png" 
        width={350}
        height={250}
        className='mb-8'
        alt="shoes login digital college" />
          <img src="https://bruno-gsilva.github.io/Drip_Store/DripStore_login/resources/images/shoes02.png" 
        width={350} 
         height={250} 
        
         alt="shoes login digital college" /> 
     

       </section> 

       <Footer/>

       </main>
    </>
  );
}
