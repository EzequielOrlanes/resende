import Menu from "../Menu";
import React from "react";
import "./QuemSomos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
      <Menu />
      <div className="Pagina1">
        <div className="Caixa1">
          <div className="header-quemsomos">
            <h1 className="Titulo-QuemSomos"> Quem Somos</h1>{" "}
          </div>
          <p className="Textodeapresentação">
            O Resende's Business é uma plataforma com o objetivo de reunir e dar
            visibilidade aos microeemprendedores da cidade de Resende Costa
            (MG), que começaram a surgir principalmente após a pandemia da
            Covid-19, a fim de impulsionar o comércio da cidade local. O sistema
            web foi desenvolvido por alunos de graduação das Engenharias
            Elétrica e de Controle e Automação da Universidade Federal de Minas
            Gerais(UFMG), e atualmente trainees da CPE - Consultoria e projetos
            Elétricos, uma empresa júnior sem fins lucrativos que busca
            incentivar o empreendedorismo no Brasil.
          </p>
        </div>
      </div>

      <div className="Pagina2">
        <img className="foto" src="./imagem/artesanato.jpg" />
      </div>

      <div className="Pagina3">
        <div className="Caixa2">
          <div className="header-duvidas">
            <h1 className="Titulo-duvidas">Dúvidas Frequentes</h1>{" "}
          </div>
          <div className="acordeao">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="duvida">
                  Não sou de Resende Costa. Posso me inscrever no site?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="resposta">
                  Infelizmente não. A plataforma é destinada apenas a
                  empreendedores que residem em Resende Costa.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="duvida">
                  Quais são os requesitos para me inscrever?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="resposta">
                  É preciso residir em Resende Costa, ter um empreendimento na
                  cidade.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="duvida">
                  {" "}
                  O que posso vender no Resende's Business ?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="resposta">
                  Nosso site é focado em produtores de artesanatos e
                  manufaturados.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="duvida">
                  Onde fica a cidade de Resende Costa?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="resposta">
                  Resende Costa é uma cidade mineira que fica 194Km ao sul de
                  Belo Horizonte.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className="duvida">
                  Precisa pagar para se cadastrar no site?
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="resposta">
                  Não, o cadastro no site é gratuito.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="Caixa3">
          <div className="texto-caixa3">
          Ainda tem alguma dúvida? Entre em contato com a gente!          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuemSomos;
