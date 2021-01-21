import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './componentes/footer';
import Home from './componentes/Home';
import Listar from './telas/listar';
import Adicionar from './telas/adicionar';
import CarrinhoCompras from './telas/carrinho';
import Login from './telas/login';

function RotaPrivada ({component:Component, ...rest}){

  const {isAuthenticated} = useSelector(state=>state.auth)
  

  return(
    <Route {...rest} render={props =>(
      isAuthenticated ? (<Component {...props}/>) : (<Redirect to={{pathname:'/', state:{from: props.location}}}/>)
    )}/>
  )
}

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
        <App/>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/listar" component={Listar}  />
            <RotaPrivada path="/adicionar" component={Adicionar}  />
            <Route path="/carrinho" component={CarrinhoCompras}  />
            <Route path="/login" component={Login}/>
         </Switch>
         <Footer/>
    </BrowserRouter>
       
    
   </Provider>,
    
    
  
  
  document.getElementById('root')
);


reportWebVitals();
