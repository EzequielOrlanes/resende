import React from "react";
import Menu from "../Menu";
import "./SegredosDeMinas.css";
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Footer/Footer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Segredos_Fotos from "./Segredos_Fotos"
import Segredos_SobreNos from "./Segredos_SobreNos"
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



  const usestyles = makeStyles({
    root: {
      display:'flex',
      minWidth: 300,

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


function SegredosDeMinas() {
  const CLASSES = UseStyles();
  const Classes = usestyles();
    const bull = <span className={Classes.bullet}>•</span>
    return (
    <>
      <Menu />
      <div className="Pagina-Segredos">
        <div className="Segredos-ima">
          <img className="Segredos-per" src="./imagem/Porcelanas.png" />
          <div className="Segredosnome">Segredos de Minas</div>
        </div>
        <div className ="Segredos-cab">
    <div className="Segredos-informaçoes">
    <Card className={Classes.root}>
      <CardContent>
        <Typography className={Classes.title} color="textSecondary" gutterBottom>
          Area:
        </Typography>
        <Typography variant="body2" component="p">
        Artesanato
        </Typography>
        <p></p>
        <Typography className={Classes.pos} color="textSecondary">
          Emaill:
        </Typography>
        <Typography variant="body2" component="p">
          tremdeminas@gmail.com.br
        </Typography>
        <p></p>
        <Typography className={Classes.pos} color="textSecondary">
          Telefone:
        </Typography>
        <Typography variant="body2" component="p">
          (99) 99999-9999
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
        <Button color="red" size="small">Alterar</Button>
        </Typography>
    </Card>
    </div>
        <div className="Segredos-fotos">
          <Segredos_Fotos/>
    </div>
    </div>
    <div className="Segredos-quemsomos">
    <Segredos_SobreNos/>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default SegredosDeMinas;
