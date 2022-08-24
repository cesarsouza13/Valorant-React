
import { useState } from 'react'
import Botao from '../botao/botao'
import CampoTexto from '../campotexto/campotexto'
import ListaSuspensa from '../listasuspensa/listasuspensa'
import './formulario.css'

const Formulario = (props) => {

   
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [classe, setClasse] = useState('')

    const aoSalvar = (event) =>{
        event.preventDefault()
        props.aoAgenteCadastrado({
            nome,
            imagem,
            classe
        })
        setNome('')
        setImagem('')
        setClasse('')
        console.log("form foi submetido =>", nome, imagem, classe)
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do agente</h2>
                <CampoTexto 
               
                 required = {true} 
                 label="Nome" 
                 placeholder="digite o nome do agente" 
                 valor = {nome} 
                 aoAlterado = {valor => setNome(valor)}
                 />
                <CampoTexto  
             
                required = {true} 
                label="Imagem" 
                placeholder="insira a imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                label="Classe do Agente" 
                itens = {props.classes} 
                valor = {classe}
                aoAlterado = {valor => setClasse(valor)}
                />
                <Botao texto = "Criar Agente" />
            </form> 
        </section>
    )

}

export default Formulario