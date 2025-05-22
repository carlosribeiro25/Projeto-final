
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import ProductListingPage from './Components/Pages/ProductListingPage';
import ProductViewPage from './Components/Pages/ProductViewPage';

export default function App() {
  return (
    <>
    
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="ProductListingPage"></Link>
        <Link to="ProductViewPage"> </Link>
      </nav>

      <Routes> 
        <Route path="/"element={<HomePage/>}/>
        <Route path="/Produtos" element={<ProductListingPage/>} />
        <Route path="/Categorias" element={<ProductViewPage/>} />
      </Routes>

    </Router>
    
    


    </>
  );
}




