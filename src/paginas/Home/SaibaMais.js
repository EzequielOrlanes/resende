import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import { ListItem} from  "@material-ui/core";
import "./SaibaMais.css";



const images = [
  {
    url: '/imagem/1.jpg',
    title: 'SAIBA MAIS',
    width: '50%', 
    pathName: '/segredosdeminas',
    legend: ' #1 Segredos de Minas',
  },

  {
    url: '/imagem/2.jpg',
    title: 'SAIBA MAIS',
    width: '50%',
    pathName: '/tremdeminasdecor',
    legend: ' #2 Trem de Minas Decor',
  },

  {
    url: '/imagem/3.jpg',
    title: 'SAIBA MAIS',
    width: '50%',
    pathName: '/tricodavovo',
    legend: ' #3 Tricô da Vovó',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    flexDirection: 'column',
    //justifyContent: 'center', 
    //alignContent: 'center', 
    //textAlign: 'center',
    marginLeft: 'auto',
   
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");
  function handleClick(pathName){
    history.push(pathName);
    setCurrentPage(pathName)
}

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <div className='images-map'>
        <div>
         <ListItem
         button
         selected = {currentPage === image.pathName}
         onClick={()=> {handleClick(image.pathName)}}>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            alignContent: 'content-position',
            
          }}
        >
       
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
              
            </Typography>
          </span>  
        </ButtonBase>
        <div>
        </div>
        </ListItem> 
            <h2 className='top'>{image.legend}</h2>
        </div>
        
        </div>
      ))}
    </div>
  );
}