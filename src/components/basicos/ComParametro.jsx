import React from 'react'

export default (props) => {
    //  props é imutável, somente leitura!
    //  props.titulo = 'Outro';
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>   
    )
}