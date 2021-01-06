import React from 'react';
import './navbar.css';


function Navbar() {
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
          <a id="textGeral" className="nav-link active" aria-current="page" href="/">Shopping-Car</a>
        </li>
        <li class="nav-item">
          <a id="textGeral" className="nav-link" href="/listar">Listar</a>
        </li>
        <li class="nav-item">
          <a id="textGeral" className="nav-link" href="/adicionar">Adicionar</a>
        </li>
       
      </ul>
      <div id="carShopp">
      <a id="CarrinhoRota" className="nav-link" href="/carrinho"><i id="carShopp1" className="fas fa-shopping-cart"></i></a>
      <p id="numberCarShopp">0</p>
      
      </div>
      
    </div>
  </div>
</nav>
     
    );
  }
  
  export default Navbar;