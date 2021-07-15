import React, { useEffect } from 'react';
import { useState } from 'react';


export function Dado(props) {

    const id = props.dado.id;
    let numero = props.dado.numero;
    let foco = props.dado.foco;
    const onClick = props.fun;

    return(
            <button type="button" className={foco ? "btn btn-primary border btn-lg" : "btn btn-primary border"} onClick={(event) => onClick(event, id)}>
                {numero}
            </button>
    )
}