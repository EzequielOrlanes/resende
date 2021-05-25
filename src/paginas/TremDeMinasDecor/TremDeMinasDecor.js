import React from "react";
import Menu from "../Menu";
import "./TremDeMinasDecor.css";
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Footer/Footer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Trem_Fotos from "./Trem_Fotos"
import Trem_SobreNos from "./Trem_SobreNos"
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";



  const usestyles = makeStyles({
    root: {
      display:'flex',
      minWidth: '60%',

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
    display:'flex',

    minWidth: 1000,
    alignItems:'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
});


function TremDeMinas() {
  const CLASSES = UseStyles();
  const Classes = usestyles();
    const bull = <span className={Classes.bullet}>•</span>
    return (
    <>
      <Menu />
      <div className="Pagina-Trem">
        <div className="Trem-ima">
          <img className="Trem-per" src="./imagem/tapete.png" />
          <div className="Tremnome">Trem De Minas</div>
        </div>
        <div className ="Trem-cab">
    <div className="Trem-informaçoes">
    <Card className={Classes.root}>
      <CardContent>
        <Typography className={Classes.title} color="textSecondary" gutterBottom>
          Área:
        </Typography>
        <Typography variant="body2" component="p">
        Artesanato.
        </Typography>
        <p></p>
        <Typography className={Classes.pos} color="textSecondary">
          E-mail:
        </Typography>
        <Typography variant="body2" component="p">
          tremdeminas@gmail.com.br
        </Typography>
        <p></p>
        <Typography className={Classes.pos} color="textSecondary">
          Telefone:
        </Typography>
        <Typography variant="body2" component="p">
          (99) 99999-9999.
        </Typography>
        <p></p>
        <Typography className={Classes.pos} color="textSecondary">
          Endereço:
        </Typography>
        <Typography variant="body2" component="p">
          Av.Primeiro
        </Typography>
      </CardContent>
      <Typography variant="body2" component="p">
        <Button color="red" size="small">
        <Link to="alterarperfil">Alterar</Link>
        </Button>
        </Typography>
    </Card>
    </div>
        <div className="fotos">
          <Trem_Fotos/>
    </div>
    </div>
    <div className="Trem-quemsomos">
    <Trem_SobreNos/>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default TremDeMinas;