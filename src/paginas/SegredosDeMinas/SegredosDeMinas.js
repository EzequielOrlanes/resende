import React from "react";
import Menu from "../Menu";
import "./SegredosDeMinas.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Segredos_Fotos from "./Segredos_Fotos";
import Segredos_SobreNos from "./Segredos_SobreNos";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

const usestyles = makeStyles({
  root: {
    display: "flex",
    minWidth: "60%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UseStyles = makeStyles({
  root: {
    display: "flex",

    minWidth: 1000,
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
});

function SegredosDeMinas() {
  const CLASSES = UseStyles();
  const Classes = usestyles();
  const bull = <span className={Classes.bullet}>•</span>;
  return (
    <>
      <Menu />
      <div className="Pagina-Segredos">
        <div className="Segredos-ima">
          <img className="Segredos-per" src="./imagem/1.jpg" />
          <div className="Segredosnome">Segredos De Minas</div>
        </div>
        <div className="Segredos-cab">
          <div className="Segredos-informaçoes">
            <Card className={Classes.root}>
              <CardContent>
                <div className="texto-perfil1">Área:</div>
                <div className="texto-perfil2">Artesanato</div>
                <p></p>
                <div className="texto-perfil1">E-mail:</div>
                <div className="texto-perfil2">
                  segredosdeminas@gmail.com.br
                </div>
                <p></p>
                <div className="texto-perfil1">Telefone:</div>
                <div className="texto-perfil2">(99) 99999-9999</div>
                <p></p>
                <div className="texto-perfil1">Endereço:</div>
                <div className="texto-perfil2">
                  R. Joao Agostinho - Resende Costa
                </div>
                <p></p>
                <div className="texto-perfil1">Número:</div>
                <div className="texto-perfil2">126</div>
                <p></p>
                <div className="texto-perfil1">Complemento:</div>
                <div className="texto-perfil2">Loja B</div>
              </CardContent>
            </Card>
          </div>
          <div className="fotos">
            <Segredos_Fotos />
          </div>
        </div>
        <div className="Perfil-quemsomos">
          <Segredos_SobreNos />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SegredosDeMinas;
