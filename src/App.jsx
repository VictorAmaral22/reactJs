import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super.jsx'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        
        <div className="Cards">
            <Card titulo="#11 - Mega Sena" color='#000'>
                <Mega qtdNumeros={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color='#000'>
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color='#000'>
                <Input></Input>    
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color='#000'>
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color='#4298b5'>
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional com If" color='#FA6900'>
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional" color='#e94c6f'>
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color='#008bba'>
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color='#d96459'>
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color='#ff85cb'>
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color='#92b06a'>
                <Primeiro />    
            </Card>
        </div>
    </div>
)