import React from "react";
import "./Home.css";
import Menu from "../Menu";
import Teste from "./Teste.js";


function Home() {
    return( 
        <>
        <div className = "pag-home">    
            <Menu/>
            <Teste/>
            
            <div className = "Home">
                
            </div>
                <div className ="content"> 
                
                    </div> 

                        <div className ="footer"> 
                            <p> 
                            Resende Business - Avenida Barbacena.
                            <p>Número 1219 - Santo Agostinho. </p>
                            CEP: 30190-924 - Belo Horizonte/MG.
                            CNPJ: 00.416.968/0001-01.
                            </p>
                    </div>
                </div></>

    );


}

export default Home;