import React from 'react';
import "./style.css"

export const Ponto: React.FC = () => {
  return (
    <main>
        <span className='box-inf'>
            <span id='time'>
                <p>Relógio de ponto</p>
                <p>0h 00m</p>
                <p>Horas de hoje</p>
            </span>
            <span id='user'>
                <p>#marcosw9</p>
                <p>Usuário</p>
                
            </span>
        </span>

        <button>Hora de entrada</button>

        <span>
            <p>Dias anteriores</p>
        </span>
        
    </main>
  )
        
}
