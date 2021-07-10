import React, { useEffect } from 'react';
import { Dado } from './Dado';
import { useState, useContext } from 'react';
import { Context } from "./Context";

export function Dados(){

    const { state } = useContext(Context);
    let [dados,setDados] = useState(state.dados);

    useEffect(() => {
            dados = state.dados
            console.log("use")
        },[state.dados]
    );

    return(
        <div>
            <Dado dado={dados[0]}/>
            <Dado dado={dados[1]}/>
            <Dado dado={dados[2]}/>
            <Dado dado={dados[3]}/>
            <Dado dado={dados[4]}/>
        </div>
    )
}