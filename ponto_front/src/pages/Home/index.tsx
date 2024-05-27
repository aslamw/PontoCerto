import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <main className='box-user'>
        <p>Ponto <b>Certo</b></p>
        <input type="text" name="user" id="user" />
        <Link to={'/ponto'} id='button'>Confirmar</Link>
        
    </main>
  )
        
}
