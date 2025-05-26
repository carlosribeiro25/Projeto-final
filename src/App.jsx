
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import ProductListingPage from './Components/Pages/ProductListingPage';
import ProductViewPage from './Components/Pages/ProductViewPage';
import Login from './Components/Pages/Login';
import Cadastro from './Components/Pages/Cadastro';
export default function App() {
  return (
    <>
    
    <Router>
      <nav>
        <Link to="home"></Link>
        <Link to="ProductListingPage"></Link>
        <Link to="ProductViewPage"> </Link>
      </nav>

      <Routes> 
        <Route path="/"element={<HomePage/>}/>
        <Route path="/Produtos" element={<ProductListingPage/>} />
        <Route path="/Categorias" element={<ProductViewPage/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>

      </Routes>

    </Router>
    
    


    </>
  );
}




