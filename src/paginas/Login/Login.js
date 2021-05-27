import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import AddButon from "./AddButton";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handlelogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      sessionStorage.setItem("getUser_Id", response.data.user.user_id);
      alert("Bem vindo", response.data.user.name);
      login(response.data.accessToken);
      history.push("/home");
    } catch (error) {
      if (error.response.status === 403) {
        alert("Credenciais Invalidas!");
      } else {
        alert(error.response.data.notification);
      }
      console.warn(error);
    }
  }

  return (
    <div className="Pagina-login">
      <div className="box-logomarca"></div>
      <div className="box-login">
        <Form>
          <img className="imagem-logo" src="./imagem/Logo.png" />
          <p></p>
          <div className="Conteudo-box-login">
            <p className="Subtitulo-login"> Faça seu Login: </p>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p></p>
            <div className="botao-entrar">
              <Button variant="primary" onClick={handlelogin}>
                ENTRAR
              </Button>
              <p></p>
              <Link to="cadastro"> Não é cadastrado? </Link>
              <h1> </h1>
              <Link to=" ">Esqueci minha senha</Link>
              <h1> </h1>
            </div>
          </div>
        </Form>
      </div>
      <AddButon />
    </div>
  );
}

export default Login;
