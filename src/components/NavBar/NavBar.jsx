import React from "react";
import "./style.css"
import {CartWidget} from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import 'boxicons';

export const NavBar = () => {

  return (
    <header className="header-navbar">
      <CartWidget />
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
        <box-icon name='cart-add'></box-icon>
      </div>
    </header>
  );
};
