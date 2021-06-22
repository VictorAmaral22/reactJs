import React, { useState } from 'react'

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0))
    
    function gerarNumNContido(Array) {
        const max = 60;
        const min = 1;
        const novoNumero = parseInt(Math.random() * (max - min)) + min;
        return [].includes(novoNumero)
            ? gerarNumNContido(Array) : novoNumero
    }
    
    function gerarNum() {
        const novoArray = Array(props.qtdNumeros)
            .fill(0)
            .reduce(a  => [...a, gerarNumNContido(a)], [])
            .sort((a, b) => a - b )
        setNumeros(novoArray)
    }
    
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNum}>Gerar Números</button>
        </>   
    )
}