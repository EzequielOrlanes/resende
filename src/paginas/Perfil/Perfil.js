import React from "react";
import Menu from "../Menu"
import "./Perfil.css";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import Footer from "../Footer/Footer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  const usestyles = makeStyles({
    root: {
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


function Perfil() {
  const CLASSES = UseStyles();
  const Classes = usestyles();
    const bull = <span className={Classes.bullet}>•</span>
    const classes = useStyles()
    return (
    <>
    <Menu/>
      <div className ="Pagina-Perfil">
        <div className ="ima">
          <img className =" per" src="./imagem/TremDeMinas.jpeg"/>
          <div className="Perfilnome">Pedro Emprendimentos</div>
        </div>
        <div className ="cab">
        <div className="fotos">
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Fotos</ListSubheader>
              </GridListTile>
                {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
</div>
    </div>
    <div className="Perfil-informaçoes">
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
    </Card>
    </div>
    </div>
    <div className="Perfil-quemsomos">
    <Card className={CLASSES.root} variant="outlined">
      <CardContent>
        <Typography className={CLASSES.title} color="textSecondary" gutterBottom>
          QUEM SOMOS
        </Typography>
        <Typography variant="body2" component="p">
          SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
          SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.
          <br />
        </Typography>
      </CardContent>
    </Card>

    </div>
    <Footer/>
    </div>
    </>
            );
          }


export default Perfil;