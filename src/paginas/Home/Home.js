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

            <div className = "bloco2"><h1>Empreendimentos Destaques do Mês</h1> </div> 
                <div className ="content">
                     
                    <>
                    <div className = "titulos">
                        <h1 className = "nome">#1 Segredos de Minas</h1>
                        <h1 className = "nome">#2 Trem de Minas Decor</h1>
                        <h1 className = "nome">#3 Tricô da Vovó</h1>
                    </div>

                    <div className = "images">
                    
                        <img className="box1" src = "/imagem/1.jpg"/>
                        <img className="box1" src = "/imagem/2.jpg"/>
                        <img className="box1" src = "/imagem/3.jpg"/>
                        </div>
                        </>
                    
                    </div>
                    
                        <div className ="footer"> 
                            <p> 
                            Resende Business - Avenida Barbacena.
                            <p>Número 1219 - Santo Agostinho. </p>
                            CEP: 30190-924 - Belo Horizonte/MG.
                            CNPJ: 00.416.968/0001-01.
                            </p>
                        </div>
        </div>
        </>

    );


}

export default Home;