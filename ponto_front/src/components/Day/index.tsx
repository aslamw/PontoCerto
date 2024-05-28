import React from 'react';
import "./style.css"

const data = [
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
    ["27/05/2024","7h 30m"],
]

export const PontoDay: React.FC = () => {
  return (
    <div className='organize-box'>
        
        {data.map((item, index) =>(
            <div key={`${index}b`} className='box'>
                <p key={`${index}d`} id='date'>{item[0]}</p>
                <p key={`${index}h`} id='hour'><b>{item[1]}</b></p>
            </div>
        ))}
        
    </div>
  )
        
}
