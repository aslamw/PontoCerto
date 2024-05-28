import React, { useState, useEffect } from 'react';
import { PontoDay } from '../../components';
import "./style.css"

export const Ponto: React.FC = () => {

    const [time, setTime] = useState('');

    useEffect( () => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const formattedTime = `${hours}h ${minutes}m`;
            setTime(formattedTime);
        }

        updateClock();
        const intervalId = setInterval(updateClock, 60000);
        return () => clearInterval(intervalId);
      }, []);

  return (
    <main className='box-ponto'>
        <div className='box-inf'>
            <span id='time'>
                <p id="title-time">Relógio de ponto</p>
                <p id='time-now'>{time}</p>
                <p>Horas de hoje</p>
            </span>
            <span id='user'>
                <p>#marcosw9</p>
                <p>Usuário</p>
                
            </span>
        </div>

        <button>Hora de entrada</button>

        <div className='box-date'>
            <p>Dias anteriores</p>
            <PontoDay/>
        </div>
        
    </main>
  )
        
}
