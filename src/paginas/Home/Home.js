import React, { useEffect } from "react";
import "./Home.css";
import Menu from "../Menu";
import Carrossel from "./Teste.js";
import SaibaMais from "./SaibaMais";
import Footer from "../Footer/Footer";

function Home() {

  return (
    <>
      <div className="pag-home">
        <Menu />
        <div className="cidade" />
        <div className="main-section">
          <div className="Home">
            <Carrossel />
          </div>

          <div className="bloco2">
            <p>EMPREENDIMENTOS DESTAQUES DO MÊS</p>
          </div>

          <div className="Saiba-Mais-section">
            <div className="images">
              <SaibaMais />
            </div>
          </div>
        </div>

        <div className="box3">
          <div className="h1">
            <p>HISTÓRIA DA CIDADE</p>
          </div>
          <div className="historia">
            <p>
              A história do município de Resende Costa se inicia no ano de 1749,
              com a construção de uma capela, aonde atualmente se encontra a
              Igreja Matriz de Nossa Senhora da Penha, tendo em volta oito
              casas, pertencentes às primeiras famílias do Arraial, como a dos
              inconfidentes José de Resende Costa pai e filho e a casa do Padre
              Toledo. No ano de 1840, mais precisamente no dia 1º de setembro,
              foi desmembrada da Paróquia de Santo Antônio de Lagoa Dourada. Com
              isso, foi elevada à paróquia, tendo como primeiro pároco o padre
              resende-costense Joaquim Carlos de Resende Alvim. Além disso, foi
              elevado a distrito do município de São José del-Rei, hoje
              Tiradentes, e emancipou-se pela lei estadual nº 556, sancionada
              pelo governador Bueno Brandão, de 30 de agosto de 1911 com a
              denominação de Vila de Resende Costa. No dia 2 de junho do ano
              seguinte, a sua emancipação político-administrativa foi
              oficializada, tendo como primeiro administrador municipal o
              presidente da Câmara Francisco Mendes de Resende. Desde 1923 o
              município passou a denominar-se simplesmente Resende Costa
            </p>
          </div>
          <img className="fotocidade" src="/imagem/baianas.jpg"></img>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
