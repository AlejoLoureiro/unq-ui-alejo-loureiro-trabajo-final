import React, { createContext, useState } from 'react';

const Context = createContext({
    state: {
        dados:[],
        datosTabla:[]
    },
    actions: {
        setDados: (dados) => {},
        setDatosTabla: (datosTable) => {}
    }
})

const ContextProvider = ({children}) => {

    const [dados, setDados] = useState();
    const [datosTable, setDatosTabla] = useState();

    const state = {
        dados:[{
            numero:1,
            foco: false,
        },
        {
            numero:2,
            foco: false,
        },
        {
            numero:3,
            foco: false,
        },
        {
            numero:4,
            foco: false,
        },
        {
            numero:5,
            foco: false,
        }],
        datosTabla:[
            {
                juego:"1",
                puntos:0,
                usado:false
            },
            {
                juego:"2",
                puntos:0,
                usado:false
            },
            {
                juego:"3",
                puntos:0,
                usado:false
            },
            {
                juego:"4",
                puntos:0,
                usado:false
            },
            {
                juego:"5",
                puntos:0,
                usado:false
            },
            {
                juego:"6",
                puntos:0,
                usado:false
            },
            {
                juego:"Escalera",
                puntos:0,
                usado:false
            },
            {
                juego:"Full",
                puntos:0,
                usado:false
            },
            {
                juego:"Poker",
                puntos:0,
                usado:false
            },
            {
                juego:"Generala",
                puntos:0,
                usado:false
            }
        ]
    }

    const actions = {
        setDados,
        setDatosTabla
    }

    return (
        <Context.Provider value={{state, actions}}>
                {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider};

