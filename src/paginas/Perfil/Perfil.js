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
  const [password, setPassword] = useState();
  const [tipo, setTipo] = useState();
  const [aae, setAae] = useState();
  const [tel, setTel] = useState();
  const [end, setEnd] = useState();
  const [num, setNum] = useState();
  const [comp, setComp] = useState();
  const [desc, setDesc] = useState();
  const [cnpj, setCnpj] = useState();
  const history = useHistory();

  const user_id = localStorage.getItem("getUser_Id");

  useEffect(() => {
    async function getUsuario() {
      var response = await api.get("/users/" + user_id);
      console.log(
        "🚀 ~ file: AlterarPerfil.js ~ line 24 ~ getUsuario ~ response",
        response
      );
      setNomeEmp(response.data.NomeEmp);
      setEmail(response.data.email);
      setAae(response.data.aae);
      setTel(response.data.tel);
      setEnd(response.data.end);
      setNum(response.data.num);
      setComp(response.data.comp);
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
                <Typography
                  className={Classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Área:
                </Typography>
                <Typography variant="body2" component="p">
                  {aae}
                </Typography>
                <p></p>
                <Typography className={Classes.pos} color="textSecondary">
                  E-mail:
                </Typography>
                <Typography variant="body2" component="p">
                  {email}
                </Typography>
                <p></p>
                <Typography className={Classes.pos} color="textSecondary">
                  Telefone:
                </Typography>
                <Typography variant="body2" component="p">
                  {tel}
                </Typography>
                <p></p>
                <Typography className={Classes.pos} color="textSecondary">
                  Endereço:
                </Typography>
                <Typography variant="body2" component="p">
                  {end}
                </Typography>
                <Typography className={Classes.pos} color="textSecondary">
                  Numero:
                </Typography>
                <Typography variant="body2" component="p">
                  {num}
                </Typography>
                <Typography className={Classes.pos} color="textSecondary">
                  Complemento:
                </Typography>
                <Typography variant="body2" component="p">
                  {comp}
                </Typography>
                <Typography className={Classes.pos} color="textSecondary">
                  Descrição:
                </Typography>
                <Typography variant="body2" component="p">
                {desc}
                </Typography>
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
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Perfil;
