import React from 'react';
import {Dados} from './Dados'

export function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div>
                        <p className='h1'> Generala </p>
                    </div>
                    <div>
                        <Dados />
                    </div>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-primary border"> Tirar </button>
                </div>
            </div>
        </div>
    )
}