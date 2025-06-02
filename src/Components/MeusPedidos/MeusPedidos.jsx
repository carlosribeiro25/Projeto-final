import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MeusPedidos2 from "./MeusPedidos2";


export default function MeusPedidos(){
    return (
        <>
        
            <Header/>
            <br />
            <section className="mb-10 flex  h-screen gap-10">
            <br /><br />
            <div className="bg-white w-60 h-60  justify-around rounded-sm flex  ml-4 ">
            <br />
            <div className="w-50 h-50   justify-center"><br />
                 <a  href="#" className="font-semibold">Meu perfil</a>
                <hr /><br />
                <a href="#" className="text-amber-600 font-semibold">Meus pedidos </a><hr /><br />
                <a href="#"className="font-semibold">Minhas Informações</a><hr /><br />
                <a href="#" className="font-semibold"  >Meus Pagamentos</a><br />
            </div>                
            </div ><br />

            <MeusPedidos2/>
        </section>
        <br />
        <br />
        

        <Footer/>
        </>
    )
}
