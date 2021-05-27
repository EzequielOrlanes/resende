import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "./Perfil.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fotos from "./Fotos";
import SobreNos from "./SobreNos";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const USEStyles = makeStyles({
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

const usestyles = makeStyles({
  root: {
    display: "flex",
    minWidth: "60%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
    display: "flex",

    minWidth: 1000,
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
});

function Perfil() {
  const [NomeEmp, setNomeEmp] = useState();
  const [email, setEmail] = useState();
  const [tipo, setTipo] = useState();
  const [aae, setAae] = useState();
  const [tel, setTel] = useState();
  const [end, setEnd] = useState();
  const [num, setNum] = useState();
  const [comp, setComp] = useState();
  const [desc, setDesc] = useState();
  const [cnpj, setCnpj] = useState();

  const user_id = sessionStorage.getItem("getUser_Id");

  useEffect(() => {
    async function getUsuario() {
      var response = await api.get("/users/" + user_id);

      setNomeEmp(response.data.NomeEmp);
      setEmail(response.data.email);
      setTipo(response.data.tipo);
      setAae(response.data.aae);
      setTel(response.data.tel);
      setEnd(response.data.end);
      setNum(response.data.num);
      setComp(response.data.comp);
      setCnpj(response.data.cnpj);
      setDesc(response.data.desc);
    }
    getUsuario();
  }, []);

  const data = {
    NomeEmp: NomeEmp,
    aae: aae,
    tel: tel,
    end: end,
    num: num,
    comp: comp,
    desc: desc,
  };

  const Classes = usestyles();
  const CLASSES = USEStyles();
  const Bull = <span className={CLASSES.bullet}>•</span>;
  const bull = <span className={Classes.bullet}>•</span>;

  return (
    <>
      <Menu />
      <div className="Pagina-Perfil">
        <div className="ima">
          <img className=" per" src="./imagem/TremDeMinas.jpeg" />
          <div className="Perfilnome">{NomeEmp}</div>
        </div>
        <div className="cab">
          <div className="Perfil-informaçoes" >
            <Card className={Classes.root}>
              <CardContent>
                <div className="texto-perfil1">
                  Tipo do Perfil:
                </div>
                <div className="texto-perfil2">
                  {tipo}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  Área:
                </div>
                <div className="texto-perfil2">
                  {aae}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  E-mail:
                </div>
                <div className="texto-perfil2">
                  {email}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  Telefone:
                </div>
                <div className="texto-perfil2">
                  {tel}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  CNPJ / CPF:
                </div>
                <div className="texto-perfil2">
                  {cnpj}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  Endereço:
                </div>
                <div className="texto-perfil2">
                  {end}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  Número:
                </div>
                <div className="texto-perfil2">
                  {num}
                </div>
                <p></p>
                <div className="texto-perfil1">
                  Complemento:
                </div>
                <div className="texto-perfil2">
                  {comp}
                </div>
              </CardContent>
              <Typography variant="body2" component="p">
                <Button color="red" size="small">
                  <Link to="alterarperfil">Alterar</Link>
                </Button>
              </Typography>
            </Card>
          </div>
          <div className="fotos">
            <Fotos />
          </div>
        </div>
        <div className="Perfil-quemsomos">
        <Card className={CLASSES.root}>
      <CardContent>
        <Typography className={CLASSES.title} color="textSecondary" gutterBottom>
          Quem Somos 
        </Typography>
        <Typography className={CLASSES.somos} variant="body2" component="p">
        <p className="Perfil-Textodeapresentação ">
        {desc}
          </p>
          
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Perfil;
