import React from "react";
import "./Home.css";
import Menu from "../Menu";
import Teste from "./Teste.js";
import AddButton from "../Cadastro/AddButton";
import Button from './Button';


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

            <div className = "bloco2">EMPREENDIMENTOS DESTAQUES DO MÊS</div> 
                <div className ="content">
                     
                    <>
                    <div className = "images">
                        <Button/>
                    </div>

                    <div className = "titulos">
                        <h2 className = "nome">#1 Segredos de Minas</h2>
                        <h2 className = "nome">#2 Trem de Minas Decor</h2>
                        <h2 className = "nome">#3 Tricô da Vovó</h2>
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