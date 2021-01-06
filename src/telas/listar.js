import React from 'react';
import { useSelector } from 'react-redux';
import './listar.css';
const selectcars = state=>state.cars

export default function Listar(){
   const cars=useSelector(selectcars)
        
    

    const c = cars.map((car, index)=>
        
        <div key={index} className="col-sm-3 mt-3 mb-3">
            <div id="cardCont" className="card" >
                <img id="imgCard" className="carsMapShowzem" src={car.url} />
            <div className="card-body">
                <label id="txtcarros">{car.name}</label>
                <p className="card-text"><i class="fas fa-cart-plus"></i></p>
            </div>
            </div>
        </div>
        
    )
    return(
    
        <div className="containerCard">
            <div className="row">
            {c}
            </div>
            </div>
           
       
    )
}