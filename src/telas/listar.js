import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './listar.css';

import {getAllCars} from '../store/fetchActions'

import Car from '../componentes/car';

export default function Listar(){

    const cars = useSelector((state)=>state.cars);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCars())
    }, [])

    function AddItemCart(car) {
        console.log(car)
    }

    return(
        <div  className="container-fluid">
            <div className="row">{cars.map((car, index)=><Car key="index" car={car}/>)}</div>
        </div>
   )
}




  