import React from 'react';

import '../telas/listar.css';


export default function Itemcart({item, removeItemCart}) {
    return(
        <div id="geralContainerCart" className="col-sm3 mt-3">
           <div id="cardCont" className="card text-white bg-primary mb-3">
                <div className="card-header">{item.name}</div>
                <div className="card-body" style={{padding:0}}>
                    <img src={item.url} alt={item.name} style={{width:'100%'}} />
                </div>
                    
                    <button className="btn btn-danger" onClick={()=>removeItemCart(item._id)} style={{width:50, position:'absolute', bottom:15, right:15}}>
                        <i className="fa fa-cart-plus fa-2x" aria-hidden="true"/>
                    </button>
                

           </div> 
        </div>
    )
}