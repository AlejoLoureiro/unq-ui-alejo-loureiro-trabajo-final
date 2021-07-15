import React, { useContext, useState } from 'react';
import { Context } from "C:/Users/ALEJO/Desktop/Facu/UI/unq-ui-alejo-loureiro-trabajo-final/unq-ui-alejo-loureiro-trabajo-final/src/Context";
import { puntos } from "C:/Users/ALEJO/Desktop/Facu/UI/unq-ui-alejo-loureiro-trabajo-final/unq-ui-alejo-loureiro-trabajo-final/src/Utilities";

export function Row(props){

    const juego = props.data.juego;
    const click = props.onClick;
    const clickTachar = props.onClickTachar
    const activo = props.data.activo;

    return(
        <tr>
            <th scope="row">
                <button type="button" className={!props.data.usado ? "btn btn-primary border" : "btn btn-secondary border"} onClick={(event) => click(event, juego)} disabled={props.data.usado||!props.data.activo}>
                    {juego}
                </button>
            </th>
            <td>
                {props.data.puntos}
            </td>
            <td>
                <button type="button" className="btn btn-light" onClick={(event) => clickTachar(event, juego)}>
                    Tachar
                </button>
            </td>
        </tr>
    )
}