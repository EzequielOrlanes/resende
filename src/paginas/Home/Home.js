import React from "react";
import "./Home.css";
import Menu from "../Menu";
import Teste from "./Teste.js";


function Home() {
    return( 
        <>
        <div className = "pag-home">    
            <Menu/>
            <div className = "cidade"/>

                <div className = "Home">
                    <Teste/>
                </div>
            
            <div className = "Home">
                
            </div>
                <div className ="content"> Bloco 2
                    </div> 
                        <div className ="footer"> 
                            <p> 
                            Resende Business - Avenida Barbacena.
                            <p>Número 1219 - Santo Agostinho. </p>
                            CEP: 30190-924 - Belo Horizonte/MG.<h1> </h1>
                            CNPJ: 00.416.968/0001-01.
                            </p>
                        </div>
        </div>
        </>

    );


}

export default Home;