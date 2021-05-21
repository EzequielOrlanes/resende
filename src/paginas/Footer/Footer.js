import { IconButton } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle, AiFillTwitterSquare} from 'react-icons/ai';

function Footer (){
    return (
        <div className ="footer">
            
            <img className='logo' src="/imagem/Loguinho.png"/>
                    <div className='infos'>
                            
                            Resende Business - Avenida Barbacena.
                            Número 1219 - Santo Agostinho.<p/> 
                            CEP: 30190-924 - Belo Horizonte/MG.
                            CNPJ: 00.416.968/0001-01.
                            
                            </div>

                                <div className="icones">
                                    <h3 className='redes'>SIGA-NOS NAS REDES SOCIAIS<p/></h3>
                                    <IconButton arial-label="Instagram" href="https://www.instagram.com/cpe.jr/"target="_blank">
                                        <AiFillInstagram/>
                                    </IconButton>

                                    <IconButton arial-label="Facebook" href="https://www.facebook.com/cpejr"target="_blank">
                                        <AiFillFacebook/>
                                    </IconButton>

                                    
                                    <IconButton arial-label="Linkedin" href="https://www.linkedin.com/"target="_blank">
                                        <AiFillLinkedin/>
                                    </IconButton>

                                    
                                    <IconButton arial-label="Youtube" href="https://www.youtube.com/channel/UCd8K0h8kjQK438PHuY2sSdQ"target="_blank">
                                        <AiFillYoutube/>
                                    </IconButton>

                                    <IconButton arial-label="Twitter" href="https://twitter.com/cpejr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"target="_blank">
                                        <AiFillTwitterSquare/>
                                    </IconButton>

                                </div>
                            
                        </div>
    );
}

export default Footer;