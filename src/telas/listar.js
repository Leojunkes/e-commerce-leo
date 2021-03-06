import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './listar.css';

import {getAllCars} from '../store/fetchActions'

import Car from '../componentes/car';
import { addItem, removeItem } from '../store/ducks/cart/index';

export default function Listar(){

    const cars = useSelector((state)=>state.cars);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCars())
    }, [])

    function addItemCart(car) {
        dispatch(addItem(car)); 
        
    }
    function removeItemLista(id) {
        dispatch(removeItem(id));
    }

    return(
        <div  className="container-fluid">
            <div className="row">{cars.map((car, index)=><Car key="index" car={car} removeItemLista={removeItemLista} addItemCart={addItemCart}/>)}</div>
        </div>
   )
}




  