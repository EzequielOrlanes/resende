import Menu from "../Menu"
import React from "react";
import "./QuemSomos.css";





function QuemSomos() {
  return (           

<div className="Pagina-QuemSomos"> 
 <Menu/>
        <div className ="Pagina1"> 
       
        <div className = "Caixa1">

                <div className= "header-quemsomos"> 
            <h1 className = "Titulo-QuemSomos"> Quem Somos nós ?</h1> </div>

                          <p className = "Textodeapresentação">
  Nós somos alunos de graduação de Engenharias Elétrica e Controle e Automação da Universidade Federal de Minas Gerais(UFMG), e atualmente somos trainees da CPE - Consultoria e Projetos Elétricos, uma empresa júnior sem fins lucrativos que busca incentivar o empreendedorismo no Brasil. Nosso objetivo com o site Resende Business é dar visibilidade aos microeemprendedores da cidade de Resende Costa (MG) que começaram a surgir principalmente após a pandemia da Covid-19, a fim de impulsionar o comércio da cidade local.O “elevator pitch”, ou “discurso de elevador”, é uma apresentação de 2 a 3 minutos muito dinâmica que simula um encontro rápido onde o empreendedor deve ser capaz de “vender” a sua ideia de forma clara e concisa.
Neste tipo de apresentação feita às pressas o importante é chamar a atenção do cliente, por isso o foco da conversa deve estar no benefício específico que seu negócio pode oferecer.
Você sabe como fazer uma apresentação da empresa para clientes no formato de “elevator pitch”? Se não, então de uma olhada nessas dicas:
Para ilustra melhor as dicas, acrescentamos exemplos baseados em um empresa que existe de verdade, o AirBnB. Adapte esses exemplos para o seu negócio.
                         </p>
          </div>
          
        </div>


        
        <div className ="Pagina2"> 

        <div className ="Fto"> 
         <img src = "./imagem/arte.jpg"/>
         </div>

        <div className = "Fto2">
        <img src = "./imagem/baianas.jpg"/>
    

        </div>


 
        </div> 


        <div className ="Pagina3"> 

        <div className = "caixa1"> Caixa1 </div>
        <div className = "caixa2"> Caixa2 </div>
        <div className = "caixa3"> Caixa3 </div>
      
         
        </div> 
        
        


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
