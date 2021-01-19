import React from 'react';
import './navbar.css';

import {useSelector} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Itemcart from './cart';




function Navbar() {
  const length = useSelector((state)=>state.cart.length)

    return (
      
        <nav id="navTotal" className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to="/" id="textGeral" className="navbar-brand" aria-current="page" >Shopping-Car</NavLink>
        </li>
        <li class="nav-item">
          <NavLink id="textGeral" className="nav-link active" to="/listar" >Listar</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/adicionar" id="textGeral" className="nav-link">Adicionar</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/carrinho" id="CarrinhoRota" activeClassName="active" className="nav-item"><i style={{paddingLeft:175}} id="carShopp1" className="fa fa-shopping-cart fa-2x" aria-hidden="true">
        <span className="fa-counter">{length}</span>
        </i></NavLink>
        
      
      
      
        </li>
       
      </ul>
      
      
    </div>
  </div>
</nav>
     
    );
  }
  
  export default Navbar;