import React from "react";
import Menu from "../Menu"
import "./Empreendimentos.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from "../Footer/Footer";

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
    <Menu/>
    <div className = "titulo-empreendimentos">
        <p>Empreendimentos</p>
    </div>

        <div className = "pagina-empreendimentos">
            <div className = "card1">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Segredos de Minas
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
            <div className = "card2">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tricô da Vovó
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
            <div className = "card3">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Trem de Minas Decor
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
            
        </div>
        <div className = "pagina-empreendimentos">
        <div className = "card1">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Segredos de Minas
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
            <div className = "card2">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Trem de Minas Decor
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
            <div className = "card3">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/imagem/almofada.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Segredos de Minas
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cada empreendimento pode colocar a descrição do seu negócio para que os clientes se interessem em conhecer mais a sua página.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                </CardActions>
                </Card>
            </div>
        </div>

    <Footer/>
    </>);
}

export default Empreendimentos;