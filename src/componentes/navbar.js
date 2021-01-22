import React from 'react';
import './navbar.css';
import logoutService from '../services/logout.service'
import {useSelector, useDispatch} from 'react-redux';
import {  NavLink } from 'react-router-dom';




function Navbar() {

  const icon = <i  id="usuario" className="fa fa-user fa-md" aria-hidden="true" ></i>
  const length = useSelector((state)=>state.cart.length)

  const {isAuthenticated} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function authLogoutButton() {
    isAuthenticated && dispatch(logoutService())
  }

    return (
      
        <nav id="navTotal" className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid sm-4 row-3">
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
          {isAuthenticated && (
            <NavLink to="/adicionar" id="textGeral" className="nav-link">Adicionar</NavLink>
          )}
        </li>
        
        
        <li class="nav-item">
          <NavLink onClick={authLogoutButton} to="/login" id="usuarios" activeClassName="active" style={{paddingLeft:175}} className="nav-item">
            
            {icon}
            </NavLink>
        </li>
        
        
        
        
        <li class="nav-item">
        <NavLink  to="/carrinho" id="CarrinhoRota" activeClassName="active" className="nav-item"><i style={{paddingLeft:185, marginTop:7}} id="carShopp1" className="fa fa-shopping-cart fa-md " aria-hidden="true">
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