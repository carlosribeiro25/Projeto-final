
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import ProductListingPage from './Components/Pages/ProductListingPage';
import Login from './Components/Pages/Login';
import Cadastro from './Components/Pages/Cadastro';
import MeusPedidos from './MeusPedidos/MeusPedidos';
import Carrinho from './Components/Carrinho';



export default function App() {
  return (
    <>
    
    <Router>
      <Routes> 
        <Route path="/"element={<HomePage/>}/>
        <Route path="/Categorias" element={<ProductViewPage/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path="/Meuspedidos" element={<MeusPedidos/>}> </Route>
        <Route path='/Carrinho' element={<Carrinho/>}></Route>


      </Routes>

    </Router>
    
    </>
  );
}




