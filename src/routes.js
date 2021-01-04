import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Adicionar from './telas/adicionar';
import Listar from './telas/listar';
import Home from './componentes/Home';
import CarrinhoCompras from './telas/carrinho';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}  />
            <Route path="/listar" component={Listar}  />
            <Route path="/adicionar" component={Adicionar}  />
            <Route path="/carrinho" component={CarrinhoCompras}  />
        </BrowserRouter>
    )
}