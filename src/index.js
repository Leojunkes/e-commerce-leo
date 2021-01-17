import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './componentes/footer';
import Home from './componentes/Home';
import Listar from './telas/listar';
import Adicionar from './telas/adicionar';
import CarrinhoCompras from './telas/carrinho';

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
        <App/>
            <Route exact path="/" component={Home}  />
            <Route path="/listar" component={Listar}  />
            <Route path="/adicionar" component={Adicionar}  />
            <Route path="/carrinho" component={CarrinhoCompras}  />
            <Footer/>
        </BrowserRouter>
       
    
   </Provider>,
    
    
  
  
  document.getElementById('root')
);


reportWebVitals();
