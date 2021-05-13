import Menu from "../Menu"
import React from "react";
import "./QuemSomos.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


function QuemSomos() {
  const classes = useStyles();
  return (           

  <div className="Pagina-QuemSomos"> 
    <Menu/>
      <div className ="Pagina1"> 
       
        <div className = "Caixa1">
          <div className= "header-quemsomos"> 
            <h1 className = "Titulo-QuemSomos"> Quem Somos</h1> </div>
              <p className = "Textodeapresentação">
                O Resende's Business é uma plataforma com o objetivo de reunir e dar visibilidade aos microeemprendedores da cidade de Resende Costa (MG), que começaram 
                a surgir principalmente após a pandemia da Covid-19, a fim de impulsionar o comércio da cidade local. O sistema web foi desenvolvido por alunos de 
                graduação das Engenharias Elétrica e de Controle e Automação da Universidade Federal de Minas Gerais(UFMG), e atualmente trainees da CPE - Consultoria e 
                projetos Elétricos, uma empresa júnior sem fins lucrativos que busca incentivar o empreendedorismo no Brasil.  
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
        <div className = "Caixa2">
          <div className= "header-duvidas"> 
            <h1 className = "Titulo-duvidas">Dúvidas Frequentes</h1> </div>
              <div className = "acordeao">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="duvida1">Não sou de Resende Costa. Posso me inscrever no site?</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="resposta1">
                      Infelizmente não. A plataforma é destinada apenas a empreendedores que residem em Resende Costa.
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <div className="duvida2">Quais são os requesitos para me inscrever?</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="resposta2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                   </div>
                  </AccordionDetails>
                </Accordion>
              </div>
          </div>
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
