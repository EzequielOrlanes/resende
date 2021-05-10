import { Button } from "bootstrap";
import React from "react";
import './Modal.css';

function Modal (){
    return <div className = 'modal'>
        <input className = 'titulo' type = 'text'>
        <textarea className = 'descricao'/>
        <div className = 'butonsRow'>
            <Button>Cancelar</Button>
            <Button variant = "contained" color = "primary">
                Salvar
            </Button>
        </div>
        </input>
    </div>

}