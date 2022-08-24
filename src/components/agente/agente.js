import './agente.css'

const Agente = ({nome, imagem, classe, corDeFundo}) =>{

    return (<div className='agente'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={'/imagens' + `${imagem}`}  alt={'Agente ' + nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{classe}</h5>
            
        </div>
    </div>)
}

export default Agente