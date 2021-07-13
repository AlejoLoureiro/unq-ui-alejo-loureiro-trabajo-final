import React, { useContext, useState } from 'react';
import { Context } from "./Context";
import { Row } from "./components/Row"
import { findDatos } from './Utilities';

export function Tabla(props) {

    const { state } = useContext(Context);

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Juegos</th>
                    <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    <Row data={findDatos(state.datosTabla,"1")} />
                
                    <Row data={findDatos(state.datosTabla,"2")} />
                
                    <Row data={findDatos(state.datosTabla,"3")} />
                
                    <Row data={findDatos(state.datosTabla,"4")} />
                
                    <Row data={findDatos(state.datosTabla,"5")} />
                
                    <Row data={findDatos(state.datosTabla,"6")} />
                
                    <Row data={findDatos(state.datosTabla,"Escalera")} />

                    <Row data={findDatos(state.datosTabla,"Full")} />

                    <Row data={findDatos(state.datosTabla,"Poker")} />
            
                    <Row data={findDatos(state.datosTabla,"Generala")} />
                </tbody>
            </table>
        </div>
    )
}