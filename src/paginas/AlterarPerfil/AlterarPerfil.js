import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./AlterarPerfil.css";
import api from "../../services/api";
import AddButon from "./AddButton";
import { useHistory } from "react-router-dom";

function AlterarPerfil() {
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

  async function handlealterarperfil(e) {
    e.preventDefault();
    try {
      const response = await api.post("/alterarperfil", {
        email,
        password,
        NomeEmp,
        tipo,
        aae,
        tel,
        end,
        num,
        comp,
        desc,
        cnpj,
      });
      history.push("/login");
    } catch (error) {
      if (error.response.status === 403) {
        alert("Preencha Corretamente Os Campos!");
      } else {
        alert(error.response.data.notification);
      }
      console.warn(error);
    }
  }

  return (
    <div className="Pagina-Cadastro">
      <div className="Parte1">
        <Form>
          <div className="titulo-cadastro">
            <h1>Alterar Perfil</h1>
            <p></p>
          </div>

          <Form.Group controlId="formBasicName">
            <Form.Label>Nome da Empresa</Form.Label>
            <Form.Control
              type="NomeEmp"
              placeholder="Nome"
              onChange={(e) => setNomeEmp(e.target.value)}
            />
          </Form.Group>
          
         
          <Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Área de atuação do empreendimento</Form.Label>
              <Form.Control
                type="aae"
                placeholder="Ex: artesanato, alimentos, vestuário, outros"
                onChange={(e) => setAae(e.target.value)}
              />
            </Form.Group>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Telefone para contato</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ex: (99)99999-9999"
              onChange={(e) => setTel(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="end"
              placeholder="Av. Primeiro"
              onChange={(e) => setEnd(e.target.value)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="num"
                placeholder="Numero"
                onChange={(e) => setNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="comp"
                placeholder="Complemento"
                onChange={(e) => setComp(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrição sobre o empreendimento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="desc"
              placeholder="Complemento"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Eu não sou um robô. 🕵🏾" />
          </Form.Group>
          <div className="Button-Cadastrar">
            <Button variant="primary" size="lg" onClick={handlealterarperfil}>
              Fazer alterações
            </Button>
          </div>
          <p></p>
        </Form>
      </div>
      <AddButon />
    </div>
  );
}

export default AlterarPerfil;
