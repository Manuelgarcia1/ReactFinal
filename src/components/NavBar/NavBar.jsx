import React from "react";
import "./style.css"
import {CartWidget} from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import 'boxicons';

export const NavBar = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <header className="header-navbar">
        <Link to="/"><CartWidget></CartWidget> </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
            <Link to="/category/Nike sb">Nike sb</Link>
        </li>
        <li>
            <Link to="/category/Nike airmax">Nike Air Max</Link>
        </li>
      </ul>
      <div>
        <Link className="img-carro" to='/cart'>
            <box-icon name='cart-add'></box-icon>
            { getQuantity() }
        </Link>
      </div>
    </header>
  );
};
