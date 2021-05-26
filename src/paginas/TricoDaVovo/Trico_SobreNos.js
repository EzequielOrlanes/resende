import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "./Trico_SobreNos.css"

const useStyles = makeStyles({
  root: {
    display:'flex',
    flexWrap: 'wrap',
    maxWidth: '100vw',
    width: '100%',
    marginTop: '12vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    alignItems:'center',
    justifyItems:'center',
  },
  pos: {
    marginBottom: 12,
  },
  somos: {
    maxWidth: '100vw',
},
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Quem Somos 
        </Typography>
        <Typography className={classes.somos} variant="body2" component="p">
        <p className="Trico-Textodeapresentação ">
        Somos um empreendimento familiar que produz roupas e enfeites
                    de tricô. Cada peça feita manualmente e exclusiva para você!
          </p>
          
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
  );
}