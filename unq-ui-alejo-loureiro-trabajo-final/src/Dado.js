import React from 'react';

export function Dado(props) {
    let numero = props.dado.numero;

    const clickDado = () => {
        props.dado.foco = !props.dado.foco;
    }

    return(
        <div>
            <button type="button" className="btn btn-primary border" onClick={clickDado}> {numero} </button>
        </div>
    )
}