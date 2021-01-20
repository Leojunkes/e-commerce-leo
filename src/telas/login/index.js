import React from 'react';

export default function Login(){
    return(
        <form style={{
            width:350,
            margin:'40px auto'
        }}>
            <h2 style={{color:'cornflowerblue'}} className="text-center">Shopping-Car Login</h2>
            <div className="form-group">
                <input placeholder="Usuário" className="form-control"></input>
            </div>
            <div>
                <input placeholder="Senha" className="form-control" type="password"></input>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">Logar</button>
            </div>
        </form>
    )
}
