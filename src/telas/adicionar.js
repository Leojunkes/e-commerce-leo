import React from 'react';
import './adicionar.css';
import { useState } from 'react';

import { useDispatch} from 'react-redux';

import {addCarFetch} from '../store/fetchActions';


export default function Adicionar(){

    const [form, setForm] = useState({name:'', url:''});
    const dispatch = useDispatch();

function formChange(e){
    setForm({...form, [e.target.name]:e.target.value});
}
function onSubmit(e){
    e.preventDefault();
    dispatch(addCarFetch(form)) ;
    setForm({name:'', url:''});
    
}
    


    return(
        
        <form onSubmit={onSubmit} id="containerGeral10" className="container-fluid">
            <div className="form-group">
            <label id="nomeLabel" className="form-label">Nome</label>
            <input value={form.name} onChange={formChange} className="form-control" type="text" id="InputName" name="name" placeholder="Nome"/>
            </div>
            <div className="form-group">
            <label id="nomeLabel"  className="form-label">URL:</label>
            <input value={form.url} onChange={formChange} className="form-control" type="text" name="url" id="InputUrl" placeholder="URL:https://cars"/>
            </div>
            <button type="submit" id="buttonAdicionar" className="btn btn-primary">Adicionar</button>
        </form>
            
        
    )
}
