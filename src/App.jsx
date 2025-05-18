import './App.css';
import  NavLink   from './Components/NavLink';
import { Outlet } from 'react-router-dom';
import ProductListing from './Components/ProductListing'
import SearchBar from './Components/SearchBar'
 export default function App() {
  return (
    <>
    <NavLink />
    <Outlet />
    <ProductListing/>
    < SearchBar/>
    </>
  );
}



