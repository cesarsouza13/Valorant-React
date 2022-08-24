
import { useState } from 'react';
import Banner from './components/banner/banner.js';
import Formulario from './components/formulario/formulario.js';
import Classe from './components/classe/classe.js';


function App() {

  const classes = [
    {
      nome: 'Duelista',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Controlador',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Iniciadores',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    }


  ]

  const [agentes, setAgente] = useState([])
  
  const aoNovoAgenteAdicionado = (agente) => {
    debugger
    setAgente([...agentes, agente])
  }
  return (
    <div className="App">
      
      <Banner />
      <Formulario classes = {classes.map(classe => classe.nome)} aoAgenteCadastrado ={agente => {aoNovoAgenteAdicionado(agente)}} />
      {classes.map(classe => <Classe 
        key={classe.nome}
        nome={classe.nome} 
        corPrimaria={classe.corPrimaria} 
        corSecundaria={classe.corSecundaria}
        agentes = {agentes.filter(agente => agente.classe == classe.nome)}
        />)}
     
    </div>
    
  );
}

export default App;
