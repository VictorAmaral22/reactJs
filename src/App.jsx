import React from 'react'
import './App.css'

import Primeiro from './components/Primeiro.jsx'
import ComParametro from './components/ComParametro.jsx'
import ComFilhos from './components/ComFilhos.jsx'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional com If">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />    
        </Card>
    </div>
)