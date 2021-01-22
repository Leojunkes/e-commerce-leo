import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Itemcart from '../componentes/cart';
import {removeItem} from '../store/ducks/cart'


import './carrinho.css';

export default function CarrinhoCompras(){
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    console.log(cart.length)

    function removeItemcart(id){
        dispatch(removeItem(id));
    }

    return(
    <div className="container-fluid">
        <div className="row">
            {cart.length === 0 ? (<p className="text-center" id="carrinhoText">Sem produtos no carrinho...</p> 
            
            ):( 

            <React.Fragment>

                {cart.map((item)=> <Itemcart key={item._id} item={item} removeItemCart={removeItemcart}/>)}

            </React.Fragment>
            
            )}
        </div>
    </div>
    )
}