import { IconButton } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle, AiFillTwitterSquare} from 'react-icons/ai';

function Footer (){
    return (
        <div className ="footer">
            
            <img src="/imagem/Loguinho.png"/>
                    <div className='infos'>
                            
                            Resende Business - Avenida Barbacena.
                            Número 1219 - Santo Agostinho.<p/> 
                            CEP: 30190-924 - Belo Horizonte/MG.
                            CNPJ: 00.416.968/0001-01.
                            
                            </div>

                                <div className="icones">
                                    <IconButton arial-label="Instagram">
                                        <AiFillInstagram/>
                                    </IconButton>

                                    <IconButton arial-label="Facebook">
                                        <AiFillFacebook/>
                                    </IconButton>

                                    
                                    <IconButton arial-label="Linkedin">
                                        <AiFillLinkedin/>
                                    </IconButton>

                                    
                                    <IconButton arial-label="Youtude">
                                        <AiFillYoutube/>
                                    </IconButton>

                                    <IconButton arial-label="Twitter">
                                        <AiFillTwitterSquare/>
                                    </IconButton>

                                </div>
                            
                        </div>
    );
}

export default Footer;