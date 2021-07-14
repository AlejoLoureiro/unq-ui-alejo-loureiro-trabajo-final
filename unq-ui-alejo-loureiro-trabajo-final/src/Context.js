import React, { createContext, useState } from 'react';

const inicioDados = [{
                        numero:0,
                        foco: false,
                    },
                    {
                        numero:0,
                        foco: false,
                    },
                    {
                        numero:0,
                        foco: false,
                    },
                    {
                        numero:0,
                        foco: false,
                    },
                    {
                        numero:0,
                        foco: false,
                    }];

const Context = createContext({
    state: {
        dados:[],
        datosTabla:[]
    },
    actions: {
        setDados: (dados) => {},
        setDatosTabla: (datosTable) => {},
        resetDados: () => {}
    }
})

const ContextProvider = ({children}) => {

    const [dados, setDados] = useState();
    const [datosTable, setDatosTabla] = useState();

    const state = {
        dados:inicioDados,
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
        setDatosTabla,
        resetDados: () => {
            setDados(inicioDados);
            return inicioDados;
        }
    }

    return (
        <Context.Provider value={{state, actions}}>
                {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider};

