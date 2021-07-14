import React, { createContext, useState } from 'react';

const inicioDados = [{
                        numero:"-",
                        foco: false,
                    },
                    {
                        numero:"-",
                        foco: false,
                    },
                    {
                        numero:"-",
                        foco: false,
                    },
                    {
                        numero:"-",
                        foco: false,
                    },
                    {
                        numero:"-",
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

