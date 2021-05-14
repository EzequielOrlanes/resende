import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Home.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <div className = "h7"><p className = "textoh7">Conheça quem torna Resende Costa a cidade do Artesanato</p></div>
      <div className="App">
           
        <Carousel breakPoints={breakPoints}>
          <Item>
          <article class="card">
                        <img src="/imagem/tapete.png" />
                    <div class='texto'>
                        <p> Tapetes </p>
                    </div>

                    </article>
                </Item>
          <Item><article class="card">
                        
                            <img src="/imagem/porcelanas.png" />
                    <div class="texto">
                       <p>Porcelanas</p>
                    </div>
                    </article></Item>
          <Item><article class="card">    
                            <img src="/imagem/almofada.png" />
                            <div class="texto">
                             <p>Almofadas</p>
                            </div>
                        
                    </article></Item>
          <Item>   <article class="card">   
                                 <img src="/imagem/prataria.png" />
                        <div class="texto">
                        <p> Pratarias </p>
                        </div>
                 </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/1.jpg" />
                <div class="texto">
                   <p>Decoração</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/2.jpg" />
                <div class="texto">
                   <p>Para cozinha</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/3.jpg" />
                <div class="texto">
                   <p>Bolsas</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/baianas.jpg" />
                <div class="texto">
                   <p>Argila</p>
                </div>
                </article></Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)

export default App;