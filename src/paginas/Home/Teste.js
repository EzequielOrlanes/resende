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
      <h1 className = "h7">Conheça quem torna Resende Costa a cidade do Artesanato</h1>
      <div className="App">
           
        <Carousel breakPoints={breakPoints}>
          <Item>
          <article class="card">
                        <img src="/imagem/tapete.png" />
                    <div class="content">
                        <p> Tapetes </p>
                    </div>

                    </article>
                </Item>
          <Item><article class="card">
                        
                            <img src="/imagem/porcelanas.png" />
                    <div class="content">
                       <p>Porcelas</p>
                    </div>
                    </article></Item>
          <Item><article class="card">
                        <header>
                            <h2>Potes</h2>
                        </header>    
                            <img src="/imagem/almofada.png" />
                            <div class="content">
                             <p>Almofadas</p>
                            </div>
                        
                    </article></Item>
          <Item>   <article class="card">
                                <header>
                                <h2>Vasos</h2>
                                </header>    
                                 <img src="/imagem/prataria.png" />
                        <div class="content">
                        <p> Pratarias </p>
                        </div>
                 </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/1.jpg" />
                <div class="content">
                   <p>Decoração</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/2.jpg" />
                <div class="content">
                   <p>Para cozinha</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/3.jpg" />
                <div class="content">
                   <p>Bolsas</p>
                </div>
                </article></Item>
          <Item><article class="card">
                        
                        <img src="/imagem/4.jpg" />
                <div class="content">
                   <p>Tricô e Crochê</p>
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