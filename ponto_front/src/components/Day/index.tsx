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
        // eslint-disable-next-line array-callback-return
        const data_filter = response.data.map((items: any , index: any)=>{
            let base = items.timestamp.split(" ")
            base[1] = base[1].split(":")
            return [base[0],`${base[1][0]}h ${base[1][1]}m`]
        })
        console.log(data_filter)
        setData(data_filter)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setData([])
      }
    };

    fetchData();
  }, []);

 

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
