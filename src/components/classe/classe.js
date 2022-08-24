import Agente from '../agente/agente'
import './classe.css'

const Classe = (props) => {

    return(
        (props.agentes.length > 0) ? <section className='classe' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='agentes'>
                {props.agentes.map(agente => <Agente corDeFundo={props.corPrimaria} key={agente.nome} nome={agente.nome} classe = {agente.classe} imagem = {agente.imagem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Classe