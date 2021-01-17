import React from 'react';
import {useSelector} from 'react-redux';

import './carrinho.css';

export default function CarrinhoCompras(){
    const cart = useSelector((state)=>state.cart);
    console.log(cart.length)

    return(
    <div className="container-fluid">
        <div className="row-ta">
            {cart.length === 0 ? (<p id="carrinhoText">Sem produtos no carrinho merda...</p> 
            
            ):( 
            
            <p>teste</p>
            )}
        </div>
    </div>
    )
}