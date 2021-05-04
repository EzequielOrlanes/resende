import React from "react";
import "./Home.css";
import Menu from "../Menu";


function Home() {
    return( 
        
        <div className = "pag-home">    
            <Menu/>
            <div className = "Home">
        
                <div className  = "imagem">
                    <img width="1380" height="420" src="https://storage.googleapis.com/bucket_ahi_reservas/2019/10/nizwa-3236202_1920-1-1-1438x535.jpg" class="attachment-single-featured size-single-featured wp-post-image wp-stateless-item" alt="Artesanato No Brasil — Destinos Para Quem Quer Comprar Lindas Peças Artesanais" data-image-size="single-featured" data-stateless-media-bucket="bucket_ahi_reservas" data-stateless-media-name="2019/10/nizwa-3236202_1920-1-1.jpg"/>
                
                </div>   
            </div>
                <div className ="content"> Bloco 2
                    </div> 
                        <div className ="navigation"> Bloco 3 </div>
                        < div className ="footer"> 
                            <p> 
                            Resende Business - Avenida Barbacena.
                            Número 1219 - Santo Agostinho. 
                            CEP: 30190-924 - Belo Horizonte/MG.
                            CNPJ: 00.416.968/0001-01.
                            </p>
                    </div>
                </div>

    );


}

export default Home;