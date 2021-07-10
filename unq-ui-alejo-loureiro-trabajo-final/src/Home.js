import React from 'react';
import { Dado } from './Dado';
import { useState, useContext } from 'react';
import { Context } from "./Context";
import { Tabla } from "./Tabla";

export function Home(){
    
    const { state } = useContext(Context);
    let [dados,setDados] = useState(state.dados);


    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleTirar = () => {
        //revisar como hacer para que se "deseleccione" la vista de todos los dados luego de tirar
        setDados(state.dados.map(dado => {
            if (dado.foco === false){
                let num = randomNum(1,6)
                dado.numero = num;
                return dado;
            } else {
                return dado;
            }
        }))
        state.dados.map(dado => dado.foco=false);
    }

    const handleFinalizarTurno = () => {

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-2 mx-auto">
                    <div>
                        <p className='h1 mb-4'> Generala </p>
                    </div>
                    <div>
                        <div>
                            <Dado dado={dados[0]}/>
                            <Dado dado={dados[1]}/>
                            <Dado dado={dados[2]}/>
                            <Dado dado={dados[3]}/>
                            <Dado dado={dados[4]}/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary border btn-lg my-4" onClick={handleTirar}> Tirar </button>
                        <button type="button" className="btn btn-primary border btn-lg" onClick={handleFinalizarTurno}> Finalizar </button>
                    </div>
                </div>
                <div className="col-2 mx-auto">
                        <p className='h1 mb-4'> Puntos </p>
                        <Tabla/>
                </div>
            </div>
        </div>
    )
}