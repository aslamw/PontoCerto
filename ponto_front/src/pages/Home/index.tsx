import React, {useState} from 'react';
import "./style.css"
import {  useNavigate} from 'react-router-dom';
import { login, api } from '../../utils';

export const Home: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);

  };

  const loginUser = () =>{

    api.get(`id/${inputValue}/`)
    .then(response => {
      if(response.status === 200){
        login(inputValue)
        navigate('/ponto')
        //window.location.href = '/ponto'
      }
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });

    
  }

  return (
    <main className='box-user'>
        <p>Ponto <b>Certo</b></p>
        <input type="text" name="user" id="user" placeholder='Codigo do usuário' onChange={handleInputChange}/>
        <button  id='button' onClick={loginUser}>Confirmar</button>
        
    </main>
  )
        
}
