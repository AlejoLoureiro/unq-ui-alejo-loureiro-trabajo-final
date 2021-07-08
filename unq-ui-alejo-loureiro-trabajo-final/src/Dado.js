import React from 'react';

export function Dado(props) {
    let numero = props.dado.numero;
    let foco = props.dado.foco;

    const clickDado = () => {
        foco = !foco;
    }

    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={clickDado}> {numero} </button>
        </div>
    )
}