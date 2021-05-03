import React from "react";
import "./QuemSomos.css";

function QuemSomos() {
  return ( 
    <div className="Pagina-QuemSomos"> 
      <div className = "box-quemsomos">
        <h1 className = "Quemsomosapresentação"> Quem somos nós ? </h1>
        <p className = "Textodeapresentação"> Nós somos alunos de graduação de Engenharias Elétrica e Controle e Automação da Universidade Federal de Minas Gerais(UFMG), e 
        atualmente somos trainees da CPE - Consultoria e Projetos Elétricos, uma empresa júnior sem fins lucrativos que busca incentivar o empreendedorismo no Brasil. Nosso objetivo com o ... é dar visibilidade aos microeemprendedores da cidade de Resende Costa (MG) que começaram a surgir principalmente após a pandemia da Covid-19, a fim de impulsionar o comércio da cidade local.</p>
        <img id = "foto" src= "imagem/foto.jpg" alt=""/>
      </div>
    </div>    
  )
}
export default QuemSomos;  