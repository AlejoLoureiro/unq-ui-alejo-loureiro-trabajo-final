import React, { createContext, useState, useMemo, useContext } from 'react';

const Context = createContext({
    state: {
        dados:[]
    },
    actions: {
        setDados: (dados) => {}
    }
})

const ContextProvider = ({children}) => {

    const [dados, setDados] = useState();

    const state = {
        dados:[{
            numero:1,
            foco: true,
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
    }

    const actions = {
        setDados
    }

    return (
        <Context.Provider value={{state, actions}}>
                {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider};

