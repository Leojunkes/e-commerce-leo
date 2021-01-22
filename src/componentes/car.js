import React from 'react';

import '../telas/listar.css';


export default function Car({car, addItemCart, removeItemLista}) {
    return(
        <div id="geralContainerCars" className="container-fluid-sm-3 mt-3 mb-3 ml-3">
           <div id="cardCont" className="card">
                <img id="imgCard" src={car.url} className="card-img-top" alt={car.name} />        
                <div className="card-body">
                    <h5>{car.name}</h5>
                    <button style={{width:60}} className="btn btn-primary" onClick={()=>addItemCart(car)}>
                        
                        <i className="fa fa-cart-plus fa-2x" aria-hidden="true"/>
                    </button>

                    <button id="removeCarButton" style={{width:60, position:'absolute', right:23}} className="btn btn-danger" onClick={()=>removeItemLista(car)}>
                        
                        <i className="fa fa-trash fa-2x" aria-hidden="true" />
                    </button>
                </div>

           </div> 
        </div>
    )
}