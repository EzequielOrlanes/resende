import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "./SobreNos.css"

const UseStyles = makeStyles({
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
  const CLASSES = UseStyles();
  const bull = <span className={CLASSES.bullet}>•</span>;

  return (
    <Card className={CLASSES.root}>
      <CardContent>
        <Typography className={CLASSES.title} color="textSecondary" gutterBottom>
          Quem Somos 
        </Typography>
        <Typography className={CLASSES.somos} variant="body2" component="p">
        <p className="Perfil-Textodeapresentação ">
            O Resende's Business é uma plataforma com o objetivo de reunir e dar 
            visibilidade aos microeemprendedores da cidade de Resende Costa
            (MG), que começaram a surgir principalmente após a pandemia da
            Covid-19, a fim de impulsionar o comércio da cidade local. O sistema
            web foi desenvolvido por alunos de graduação das Engenharias
            Elétrica e de Controle e Automação da Universidade Federal de Minas
            Gerais(UFMG), e atualmente trainees da CPE - Consultoria e projetos
            Elétricos, uma empresa júnior sem fins lucrativos que busca
            incentivar o empreendedorismo no Brasil.
          </p>
          
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
  );
}