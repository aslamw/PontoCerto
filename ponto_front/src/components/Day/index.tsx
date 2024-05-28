import React,{useEffect, useState} from 'react';
import { api, getToken } from '../../utils';
import "./style.css"



export const PontoDay: React.FC = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getToken();
        const now = new Date();
        const hours = now.getHours();
        const type = hours >= 8 && hours <= 18 ? 'start' : 'end';

        const response = await api.post('/ponto/tipo', { userId, type });

        
        console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div className='organize-box'>
        
        {/* {data.map((item:any, index:any) =>(
            <div key={`${index}b`} className='box'>
                <p key={`${index}d`} id='date'>{item[0]}</p>
                <p key={`${index}h`} id='hour'><b>{item[1]}</b></p>
            </div>
        ))}  */}
        
    </div>
  )
        
}
