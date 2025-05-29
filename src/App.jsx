
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import ProductListingPage from './Components/Pages/ProductListingPage';
import ProductViewPage from './Components/Pages/ProductViewPage';
import Login from './Components/Pages/Login';
import Cadastro from './Components/Pages/Cadastro';
import MeusPedidos from './MeusPedidos/MeusPedidos';


export default function App() {
  return (
    <>
    
    <Router>
      <Routes> 
        <Route path="/"element={<HomePage/>}/>
        <Route path="/Produtos" element={<ProductListingPage/>} />
        <Route path="/Categorias" element={<ProductViewPage/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path="/Meus pedidos" element={<MeusPedidos/>}> </Route>

      </Routes>

    </Router>
    
    


    </>
  );
}




