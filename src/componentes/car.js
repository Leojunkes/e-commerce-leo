import React from 'react';

import '../telas/listar.css';


export default function Car({car, addItemCart}) {
    return(
        <div className="container-fluid-sm-3 mt-3 mb-3 ml-3">
           <div id="cardCont" className="card">
                <img src={car.url} className="card-img-top" alt={car.name} />        
                <div className="card-body">
                    <h5>{car.name}</h5>
                    <button className="btn btn-primary">
                        <i className="fa fa-cart-plus fa-2x" aria-hidden="true"/>
                    </button>
                </div>

           </div> 
        </div>
    )
}