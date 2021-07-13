import React from 'react';
import { useState } from 'react';


export function Dado(props) {

    let numero = props.dado.numero;
    const [foco,setFoco] = useState(props.dado.foco)

    const clickDado = () => {
        setFoco(!foco);
        props.dado.foco = !props.dado.foco;
    }


    return(
            <button type="button" className={props.dado.foco ? "btn btn-primary border btn-lg" : "btn btn-primary border"} onClick={clickDado}>
                {numero}
            </button>
    )
}