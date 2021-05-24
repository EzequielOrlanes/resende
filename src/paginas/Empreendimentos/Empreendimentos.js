import React from "react";
import Menu from "../Menu";
import "./Empreendimentos.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Empreendimentos() {
  const classes = useStyles();

  return (
    <>
      <Menu />
      <div className="titulo-empreendimentos">
        <p>Empreendimentos</p>
      </div>

      <div className="pagina-empreendimentos">
        <div className="centralizar">
          <div className="card1">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/almofada.png"
                />
                <CardContent>
                  <div className="titulo-empreen">Segredos de Minas</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Quer deixar sua casa ainda mais bonita? Nos dedicamos a criar
                     itens de decoração criativos e que valorizarão ainda mais o ambiente.

                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="segredosdeminas">Saiba mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card2">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/almofada.png"
                />
                <CardContent>
                  <div className="titulo-empreen">Tricô da Vovó</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Somos um empreendimento familiar que produz roupas e enfeites
                    de tricô. Cada peça feita manualmente e exclusiva para você!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="tricodavovo">Saiba mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card3">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/almofada.png"
                />
                <CardContent>
                  <div className="titulo-empreen">Trem de Minas Decor</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Desde 2015 produzindo almofadas, tapetes, colchas, toalhas e 
                    outros produtos para decorar a sua casa. Venha conhecer nosso negócio!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="tremdeminasdecor">Saiba mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <p></p>
      </div>

      <Footer />
    </>
  );
}

export default Empreendimentos;
