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

function Perfil() {
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
    </div>
    <Footer/>
    </div>
    </>
            );
          }


export default Perfil;