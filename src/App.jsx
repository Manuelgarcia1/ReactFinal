import  React  from "react";
import {NavBar} from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./components/inicio/index"
import Cart from "./components/Cart/cart";
function App( id ) {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar key={id}/>
      <Routes>
      
      <Route path="/" element={
        <Inicio/>
      } />
      
        
      <Route path="/productos" element={
        <ItemListContainer/>
      } />
      
      <Route path="/category/:categoryId" element={
        <ItemListContainer title="Categoria" />
      } />
      
      <Route path="/cart" element={
        <Cart/>
      } />
      
       <Route path="/item/:id" element={
        <ItemDetailContainer title="Detalle"/>
      } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;