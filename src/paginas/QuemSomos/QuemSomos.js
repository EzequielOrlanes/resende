import Menu from "../Menu"
import React from "react";
import "./QuemSomos.css";



function QuemSomos() {
  return (           
<div className="Pagina-QuemSomos"> 
 <Menu/>
        <div className ="header"> 
        
            <h1 className = "Titulo-QuemSomos"> Quem Somos nós ?</h1>
          <p  className = "Textodeapresentação">
Nós somos alunos de graduação de Engenharias Elétrica e Controle e Automação da Universidade Federal de Minas Gerais(UFMG), e atualmente somos trainees da CPE - Consultoria e Projetos Elétricos, uma empresa júnior sem fins lucrativos que busca incentivar o empreendedorismo no Brasil. Nosso objetivo com o ... é dar visibilidade aos microeemprendedores da cidade de Resende Costa (MG) que começaram a surgir principalmente após a pandemia da Covid-19, a fim de impulsionar o comércio da cidade local.
          </p>
          <div className = "box1"> Box 1 </div>
        </div>

        <div className ="content"> Bloco 2

          </div> 
        
        <div className ="navigation"> Bloco 3  </div>


        <div className ="footer"> 

        <div className = "Logo"> 
        <img src="./imagem/Logo.png"/> 
        
        </div>

        <p> 
          Resende Business - Avenida Barbacena.
          Número 1219 - Santo Agostinho. 
          CEP: 30190-924 - Belo Horizonte/MG.
          CNPJ: 00.416.968/0001-01.
        </p>

        </div>

</div>
)

  }

export default QuemSomos;  
