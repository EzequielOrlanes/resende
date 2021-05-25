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
                  image="/imagem/1.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Segredos de Minas</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Quer deixar sua casa ainda mais bonita? Nos dedicamos a criar
                     itens de decoração criativos e que valorizam ainda mais o ambiente.

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
                  image="/imagem/img8.jpg"
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
                  image="/imagem/2.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Trem de Minas Decor</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Decoração para que cada cantinho da sua casa fique ainda 
                    mais estiloso! Aceitamos encomendas de produtos customizados.
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
        <div className="centralizar">
          <div className="card1">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img6.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Quadros da Maria</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Mande sua foto para a gente e criaremos quadros 
                    personalizados para enfeitar sua casa! Também temos modelos prontos.
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card2">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img5.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Louças Resende</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Vendemos louças manufaturadas com designs elegantes e singulares 
                    para você servir seus convidados e  enfeitar sua mesa!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card3">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img4.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Bela Cozinha</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Panos de prato, porta talheres, descansos de panela 
                    e diversos outros utensilhos de cozinha e decoração para o seu ambiente.
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="centralizar">
          <div className="card1">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img3.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Sua Cerâmica</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Lojinha de produtos especializada na produção manual de vasos e 
                    louças de cerâmica. Nada mais tradicional em Resende Costa!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card2">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img2.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Rainha do Tricô</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Venda de roupa personalizadas e feitas pelas mais experientes 
                    costureiras da região. Venha conferir nossas lindas peças!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card3">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img1.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Decorar com Cores</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Desde 2015 produzindo almofadas, tapetes, colchas, toalhas e 
                    outros produtos para decorar a sua casa. Venha conhecer nosso negócio!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="centralizar">
          <div className="card1">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img7.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Garrafas color</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Arte feita com garrafas e areia de todas as cores para enfeitas 
                    prateleiras, mesas e superficies e alegrar ainda mais o ambiente!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card2">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/img9.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Produtos do Rafa</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Cada item feito com cuidado e criatividade para presentear seus 
                    amigos e parentes! Já estamos te esperando na nossa loja!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card3">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/imagem/arte.jpg"
                />
                <CardContent>
                  <div className="titulo-empreen">Decorar com Cores</div>
                  <div className="descricao-empreen">
                    <p></p>
                    Venha ver como são feitos nossas cerâmicas! Além de produtos 
                    lindos para se comprar, ensinamos a fazê-los você mesmo!
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  Saiba mais
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
