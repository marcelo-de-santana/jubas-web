import React, { useEffect } from 'react';
import Img from "./assets/images/logoMarca.jpg"
import './App.css';

function App () {
  useEffect(()=> {
    fetch(`${process.env.SERVER_HOST}/login`)
    .then(response => response.json())
  })

  return (
      <div className="container">
        <form className='form'>
        <h1 className='textHeader'>Juba's Barbearia</h1>
          <img src={Img}></img>
        
          <label>Digite seu CPF:</label>
          <input type='text'/>
          <label>Digite sua senha:</label>
          <input type='password'/>
          <button>Entrar</button>

          <div>Esqueci minha senha</div>
        <div>Não possui uma conta? Cadastre-se</div>
        </form>
      </div>
    );
  }


export default App;
