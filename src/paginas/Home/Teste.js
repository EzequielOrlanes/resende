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
                        <img src="/imagem/4.jpg" />
                    <div class="content">
                        <p> Tricô e Crochê </p>
                    </div>

                    </article>
                </Item>
          <Item><article class="card">
                        
                            <img src="/imagem/3.jpg" />
                    <div class="content">
                       <p>Feitas de material reciclável</p>
                    </div>
                    </article></Item>
          <Item><article class="card">
                        <header>
                            <h2>Potes</h2>
                        </header>    
                            <img src="/imagem/2.jpg" />
                            <div class="content">
                             <p>Crochê e enfeite de vidros</p>
                            </div>
                        
                    </article></Item>
          <Item>   <article class="card">
                                <header>
                                <h2>Vasos</h2>
                                </header>    
                                 <img src="/imagem/1.jpg" />
                        <div class="content">
                        <p> Artesanato com argila </p>
                        </div>
                 </article></Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)

export default App;