import React from 'react';
import { Dado } from './Dado';
import { useState, useContext, useEffect } from 'react';
import { Context } from "./Context";
import { Tabla } from "./Tabla";
import { calcularJuegos } from "./Utilities";


export function Home(){
    
    const { state } = useContext(Context);
    const [dados,setDados] = useState(state.dados);
    const [rondas,setRondas] = useState(3);
    const [puntosTotales, setPuntosTotales] = useState(0);

    const updatePuntosTotales = () =>{
        let total = 0;
        state.datosTabla.map(dato => {
            total = total + dato.puntos;
        })
        setPuntosTotales(total);
    }


    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const activarRequeridos = (list) => {
        for (let i=0; i < list.length; i++){
            for (let j=0; j < state.datosTabla.length; j++){
                if (list[i] === state.datosTabla[j].juego){
                    state.datosTabla[j].activo = true;
                }
            }
        }
    }

    const desactivarJuegos = () => {
        for (let i=0; i < state.datosTabla.length; i++){
            state.datosTabla[i].activo = false;
        }
    }

    const handleTirar = () => {
        setDados(state.dados.map(dado => {
            if (dado.foco === false){
                let num = randomNum(1,6)
                dado.numero = num;
                return dado;
            } else {
                return dado;
            }
        }));
        state.dados.map(dado => dado.foco=false);
        setRondas(rondas-1);
        if (rondas === 0){
            handleFinalizarTurno();
        }
        desactivarJuegos();
        updatePuntosTotales();
    }

    const handleFinalizarTurno = () => {
        const dados = state.dados;
        const juegosDisponibles = calcularJuegos(dados);
        setRondas(2);
        activarRequeridos(juegosDisponibles);
        updatePuntosTotales();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-3 mx-auto">
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
                        <div className="card">
                            <b>Ronda Numero: {rondas}</b>
                        </div>
                    </div>
                </div>
                <div className="col-2 mx-auto">
                        <p className='h1 mb-4'> Puntos: {puntosTotales} </p>
                        <Tabla/>
                </div>
            </div>
        </div>
    )
}