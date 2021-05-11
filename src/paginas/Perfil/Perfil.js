import React from "react";
import Menu from "../Menu"
import "./Perfil.css";
import Foto from "./Foto"
function Perfil() {
    return (
    <>
    <Menu/>
    <div className ="Pagina-Perfil">
            <div className ="ponto">
                <img className ="ima" src = "./imagem/capa-resende-costa.jpg"/> 
            </div>
            <Foto/>
    </div>
    </>);
}

export default Perfil;