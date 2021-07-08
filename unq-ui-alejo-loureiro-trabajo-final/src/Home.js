import React from 'react';
import {Dados} from './Dados'

export function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div>
                            <p className='h1'> Generala </p>
                        </div>
                        <div>
                            <Dados/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}