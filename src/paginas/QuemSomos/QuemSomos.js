import Menu from "../Menu"
import React from "react";
import "./QuemSomos.css";



function QuemSomos() {
  return (           
<div className="Pagina-QuemSomos"> 
 <Menu/>
        <div className ="header"> 
        
            <div className = "Titulo">
          <h1 className = "Titulo-QuemSomos"> Quem Somos nós ?</h1>
            </div>

            <div className = "Apresentação"> 
          <p  className = "Textodeapresentação">
Nós somos alunos de graduação de Engenharias Elétrica e Controle e Automação da Universidade Federal de Minas Gerais(UFMG), e atualmente somos trainees da CPE - Consultoria e Projetos Elétricos, uma empresa júnior sem fins lucrativos que busca incentivar o empreendedorismo no Brasil. Nosso objetivo com o ... é dar visibilidade aos microeemprendedores da cidade de Resende Costa (MG) que começaram a surgir principalmente após a pandemia da Covid-19, a fim de impulsionar o comércio da cidade local.
          </p>
          </div>

          <div className = "box1">

          <img className = "Foto" src= "./imagem/Quemsomos.jpg"/> 

          </div>
        </div>

        <div className ="content"> Bloco 2

        </div> 
        
        <div className ="navigation"> Bloco 3 </div>


        <div className ="footer"> 
        

        <p> 
          Resende Business - Avenida Barbacena.<p/>
          Número 1219 - Santo Agostinho. <p/>
          CEP: 30190-924 - Belo Horizonte/MG.<p/>
          CNPJ: 00.416.968/0001-01.<p/>
        </p>

      </div>

</div>
)

  }

export default QuemSomos;  
