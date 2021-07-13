import React, { useContext, useState } from 'react';

export function Row(props){

    const juego = props.data.juego;
    const [usado,setUsado] = useState(props.data.usado);
    
    const handleClick = () => {
        setUsado(true);
        props.data.usado = true;
    }


    return(
        <tr>
            <th scope="row">
                <button type="button" className={!usado ? "btn btn-primary border" : "btn btn-secondary border"} onClick={handleClick}>
                    {juego}
                </button>
            </th>
            <td>
                {props.data.puntos}
            </td>
        </tr>
    )
}