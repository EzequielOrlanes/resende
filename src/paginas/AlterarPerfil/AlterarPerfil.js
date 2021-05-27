import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./AlterarPerfil.css";
import api from "../../services/api";
import AddButon from "./AddButton";
import { useHistory } from "react-router-dom";

function AlterarPerfil() {
  const [NomeEmp, setNomeEmp] = useState();
  const [aae, setAae] = useState();
  const [tel, setTel] = useState();
  const [end, setEnd] = useState();
  const [num, setNum] = useState();
  const [comp, setComp] = useState();
  const [desc, setDesc] = useState();
  const [cnpj, setCnpj] = useState();
  const [robo, setRobo] = useState("off");
  const history = useHistory();

  const user_id = sessionStorage.getItem("getUser_Id");

  useEffect(() => {
    async function getUsuario() {
      var response = await api.get("/users/" + user_id);
      console.log(
        "🚀 ~ file: AlterarPerfil.js ~ line 25 ~ getUsuario ~ response",
        response
      );

      setNomeEmp(response.data.NomeEmp);
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

  async function handlealterarperfil(e) {
    e.preventDefault();

    const data = {
      NomeEmp: NomeEmp,
      aae: aae,
      tel: tel,
      end: end,
      num: num,
      comp: comp,
      cnpj: cnpj,
      desc: desc,
    };

    try {
      if (robo === "on") {
        const response = await api.put("/alterarperfil/" + user_id, data);
        alert("Dados alterados com sucesso!");
        history.push("/perfil");
      } else {
        alert("Você é um robô ?");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(
          "Preencha Corretamente Os Campos. Todos os campos são obrigatórios!"
        );
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
              value={NomeEmp}
              onChange={(e) => setNomeEmp(e.target.value)}
            />
            <Form.Text className="text-muted">
              Minimo 3 digitos. Máximo 30 digitos.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Área de atuação do empreendimento</Form.Label>
              <Form.Control
                type="aae"
                value={aae}
                onChange={(e) => setAae(e.target.value)}
              />
              <Form.Text className="text-muted">
                Minimo 3 digitos. Máximo 30 digitos.
              </Form.Text>
            </Form.Group>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Telefone para contato</Form.Label>
            <Form.Control
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <Form.Text className="text-muted">
              Apenas Numeros. 11 digitos com DDD
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>CNPJ / CPF</Form.Label>
            <Form.Control
              type="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              Minimo 11 digitos. Máximo 14 digitos. Apenas Numeros.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <Form.Text className="text-muted">
              Minimo 3 digitos. Máximo 50 digitos.
            </Form.Text>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="num"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
              <Form.Text className="text-muted">
                Numero do endereço. Entre 0 e 9999
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="comp"
                value={comp}
                onChange={(e) => setComp(e.target.value)}
              />
              <Form.Text className="text-muted">
                Minimo 3 digitos. Máximo 30 digitos.
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrição sobre o empreendimento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Form.Text className="text-muted">
              Minimo 3 digitos. Máximo 600 digitos.
            </Form.Text>
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Eu não sou um robô. 🕵🏾"
              onChange={(e) => setRobo(e.target.value)}
              required={true}
            />
            <Form.Text className="text-muted">Obrigatório!</Form.Text>
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
