import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../store/fetchActions'

export default function Login(){

    const dispatch = useDispatch();

const [form, setForm] = useState({username:'', password:''})

function changeForm(e) {
    const {name, value}  = e.target
    setForm({...form , [name]:value})
}

function submitForm(e) {
    e.preventDefault()
    dispatch(authLogin(form))
    setForm({username:'', password:''})
}

    return(
        <form onSubmit={submitForm} style={{
            width:350,
            margin:'40px auto'
        }}>
            <h2 style={{color:'cornflowerblue'}} className="text-center">Shopping-Car Login</h2>
            <div className="form-group">
                <input onChange={changeForm} value={form.username} placeholder="Usuário" name="username" className="form-control"></input>
            </div>
            <div>
                <input onChange={changeForm} value={form.password} placeholder="Senha" name="password" className="form-control" type="password"></input>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">Logar</button>
            </div>
        </form>
    )
}
