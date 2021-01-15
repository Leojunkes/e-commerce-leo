import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './listar.css';

import {getAllCars} from '../store/fetchActions'

export default function Listar(){

    const cars = useSelector((state)=>state.cars);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCars())
    }, [])

    return(
   <div id="geralContainerCars" className="container-fluid-sm-6">
       {cars.map(car=>(
        <div id="cardCont" className="card">
            <img id="imgCard" className="carsContainer" src={car.url}/>
        <div key={car.id} className="card-body">
            <strong>{car.name}</strong>
            <p className="card-text"><i class="fas fa-cart-plus"></i></p>

        </div>
        </div>
       ))}
   </div>
   )
}




  