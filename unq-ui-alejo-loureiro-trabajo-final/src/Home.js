import React from 'react';
import { Dado } from './Dado';
import { useState } from 'react';
import { Tabla } from "./Tabla";
import { calcularJuegos } from "./Utilities";
import { puntos } from "C:/Users/ALEJO/Desktop/Facu/UI/unq-ui-alejo-loureiro-trabajo-final/unq-ui-alejo-loureiro-trabajo-final/src/Utilities";



export function Home(){
    
    const [dados,setDados] = useState(inicioDados);
    const [datosTabla, setDatosTabla] = useState(inicioDatosTabla);
    const [rondas,setRondas] = useState(3);
    const [puntosTotales, setPuntosTotales] = useState(0);

    const updatePuntosTotales = () => {
        let total = 0;
        datosTabla.map(dato => {
            total = total + dato.puntos;
        })
        setPuntosTotales(total);
    }

    const resetDados = () => {
        setDados(dados.map(dado => {
            dado.numero = "-";
            dado.foco = false;
            return dado;
        }))
    }

    const tachar = (event, juego) => {
        setDatosTabla(datosTabla.map(dato =>{
            if (dato.juego === juego){
                dato.usado = true;
            } 
            return dato;
        }))
        resetDados();
        updatePuntosTotales();
        desactivarJuegos();
        setRondas(3);
    }

    const clickDado = (event,id) => {
        setDados(dados.map(dado => {
            if (dado.id === id){
                dado.foco = !dado.foco;
                return dado;
            } else {
                return dado;
            }
        }))
    }

    const clickJuego = (event, juego) =>{
        let n = 0;
        if (juego === "1" || juego === "2" || juego === "3" || juego === "4" || juego === "5" || juego === "6"){
            for (let i=0; i < dados.length; i++){
                if (dados[i].numero == juego){
                    n++
                }
            }
        }
        setDatosTabla(datosTabla.map(dato =>{
            if (dato.juego === juego){
                dato.puntos = (puntos(juego,n));
                dato.usado = true;
            } 
            return dato;
        }))
        resetDados();
        updatePuntosTotales();
        desactivarJuegos();
        setRondas(3);
    }

    const desactivarJuegos = () => {
        setDatosTabla(datosTabla.map(dato => {
            dato.activo = false;
            return dato;
        }))
    }


    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const activarRequeridos = (list) => {
        for (let i=0; i < list.length; i++){
            setDatosTabla(datosTabla.map(dato => {
                if (list[i] === dato.juego){
                    dato.activo = true;
                    return dato;
                } else {
                    return dato;
                }
            }))
        }
    }

    const handleTirar = () => {
        setDados(dados.map(dado => {
            if (dado.foco === false){
                let num = randomNum(1,6)
                dado.numero = num;
                return dado;
            } else {
                dado.foco = false;
                return dado;
            }
        }));
        setRondas(rondas-1);
    }

    const handleFinalizarTurno = () => {
        const juegosDisponibles = calcularJuegos(dados);
        activarRequeridos(juegosDisponibles);
        updatePuntosTotales();
        setRondas(0);
    }

    const handleReiniciar = () => {
        resetDados();
        desactivarJuegos();
        setPuntosTotales(0);
        setRondas(3);
        setDatosTabla(datosTabla.map(dato =>{
            dato.puntos = 0;
            dato.tachar = false;
            dato.usado = false;
            return dato;
        }));
    }

    return(
        <div className="container">
            <div className="generala row"> 
                <div className="h1 text-center"> Generala </div> 
            </div>
            <div className="row main">
                <div className="col-3 mx-auto">
                    <div className="dados">
                        <div>
                            <Dado dado={dados[0]} fun={clickDado}/>
                            <Dado dado={dados[1]} fun={clickDado}/>
                            <Dado dado={dados[2]} fun={clickDado}/>
                            <Dado dado={dados[3]} fun={clickDado}/>
                            <Dado dado={dados[4]} fun={clickDado}/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary border btn-lg my-4" onClick={handleTirar} disabled = {rondas == 0}> Tirar </button>
                        <button type="button" className="btn btn-primary border btn-lg" onClick={handleFinalizarTurno}> Finalizar </button>
                        <div className="card">
                            <b>Ronda Numero: {rondas}</b>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary btn-lg my-4" onClick={handleReiniciar}> Reiniciar </button>
                        </div>
                    </div>
                </div>
                <div className="col-3 mx-auto tabla">
                        <p className='h1 mb-4 puntos'> Puntos: {puntosTotales} </p>
                        <Tabla data={datosTabla} onClick={clickJuego} clickTachar={tachar}/>
                </div>
            </div>
        </div>
    )
}

const inicioDados = [{

    id:0,
    numero:"-",
    foco: false,
},
{
    id:1,
    numero:"-",
    foco: false,
},
{
    id:2,
    numero:"-",
    foco: false,
},
{
    id:3,
    numero:"-",
    foco: false,
},
{
    id:4,
    numero:"-",
    foco: false,
}];


const inicioDatosTabla =[
    {
        juego:"1",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"2",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"3",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"4",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"5",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"6",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"Escalera",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"Full",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"Poker",
        puntos:0,
        usado:false,
        activo:false
    },
    {
        juego:"Generala",
        puntos:0,
        usado:false,
        activo:false
    }
]