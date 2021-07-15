import React, { useContext, useState } from 'react';
import { Context } from "./Context";
import { Row } from "./components/Row"
import { findDatos } from './Utilities';

export function Tabla(props) {

    const clickJuego = props.onClick;
    const clickTachar = props.clickTachar;

    return(
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Juegos</th>
                    <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    <Row data={findDatos(props.data,"1")} onClick={clickJuego} onClickTachar={clickTachar} />
                
                    <Row data={findDatos(props.data,"2")} onClick={clickJuego} onClickTachar={clickTachar} />
                
                    <Row data={findDatos(props.data,"3")} onClick={clickJuego} onClickTachar={clickTachar} />
                
                    <Row data={findDatos(props.data,"4")} onClick={clickJuego} onClickTachar={clickTachar} />
                
                    <Row data={findDatos(props.data,"5")} onClick={clickJuego} onClickTachar={clickTachar}/>
                
                    <Row data={findDatos(props.data,"6")} onClick={clickJuego} onClickTachar={clickTachar} />
                
                    <Row data={findDatos(props.data,"Escalera")} onClick={clickJuego} onClickTachar={clickTachar} />

                    <Row data={findDatos(props.data,"Full")} onClick={clickJuego} onClickTachar={clickTachar} />

                    <Row data={findDatos(props.data,"Poker")} onClick={clickJuego} onClickTachar={clickTachar} />
            
                    <Row data={findDatos(props.data,"Generala")} onClick={clickJuego} onClickTachar={clickTachar} />
                </tbody>
            </table>
    )
}