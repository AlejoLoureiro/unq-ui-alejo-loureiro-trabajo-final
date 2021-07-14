import React, { useContext, useState } from 'react';
import { Context } from "C:/Users/ALEJO/Desktop/Facu/UI/unq-ui-alejo-loureiro-trabajo-final/unq-ui-alejo-loureiro-trabajo-final/src/Context";
import { puntos } from "C:/Users/ALEJO/Desktop/Facu/UI/unq-ui-alejo-loureiro-trabajo-final/unq-ui-alejo-loureiro-trabajo-final/src/Utilities";

export function Row(props){

    const juego = props.data.juego;
    const { state } = useContext(Context);
    const activo = props.data.activo;
    const [usado,setUsado] = useState(props.data.usado);
    
    const handleClick = () => {
        setUsado(true);
        props.data.usado = true;
        let n = 0;
        if (juego === "1" || juego === "2" || juego === "3" || juego === "4" || juego === "5" || juego === "6"){
            for (let i=0; i < state.dados.length; i++){
                if (state.dados[i].numero == juego){
                    n++
                }
            }
        }
        props.data.puntos = puntos(juego,n);
    }

    return(
        <tr>
            <th scope="row">
                <button type="button" className={!usado ? "btn btn-primary border" : "btn btn-secondary border"} onClick={handleClick} disabled={usado||!activo}>
                    {juego}
                </button>
            </th>
            <td>
                {props.data.puntos}
            </td>
        </tr>
    )
}