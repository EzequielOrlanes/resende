import React from "react";
import Menu from "../Menu";
import "./TremDeMinasDecor.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Trem_Fotos from "./Trem_Fotos";
import Trem_SobreNos from "./Trem_SobreNos";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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

function TremDeMinas() {
  const CLASSES = UseStyles();
  const Classes = usestyles();
  const bull = <span className={Classes.bullet}>•</span>;
  return (
    <>
      <Menu />
      <div className="Pagina-Trem">
        <div className="Trem-ima">
          <img className="Trem-per" src="./imagem/trem.jpeg" />
          <div className="Tremnome">Trem De Minas Decor</div>
        </div>
        <div className="Trem-cab">
          <div className="Trem-informaçoes">
            <Card className={Classes.root}>
              <CardContent>
              <div className="texto-perfil1">
          Área:
        </div>
        <div className="texto-perfil2">
        Artesanato
        </div>
        <p></p>
        <div className="texto-perfil1">
          E-mail:
        </div>
        <div className="texto-perfil2">
          tremdeminasdecor@gmail.com.br
        </div>
        <p></p>
        <div className="texto-perfil1">
          Telefone:
        </div>
        <div className="texto-perfil2">
          (99) 99999-8888
        </div>
        <p></p>
        <div className="texto-perfil1">
          Endereço:
        </div>
        <div className="texto-perfil2">
          R. Professor Silveira - Resende Costa
        </div>
        <p></p>
        <div className="texto-perfil1">
          Número:
        </div>
        <div className="texto-perfil2">
          463
        </div>
        <p></p>
        <div className="texto-perfil1">
          Complemento:
        </div>
        <div className="texto-perfil2">
          Apto 201
        </div>
              </CardContent>
              <Typography variant="body2" component="p"></Typography>
            </Card>
          </div>
          <div className="Trem-fotos">
            <Trem_Fotos />
          </div>
        </div>
        <div className="Trem-quemsomos">
          <Trem_SobreNos />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TremDeMinas;
