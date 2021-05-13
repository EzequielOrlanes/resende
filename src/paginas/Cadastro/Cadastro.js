import React from "react";
import {Form, Col,Button} from "react-bootstrap"
import "./Cadastro.css"
import AddButon from "./AddButton"
import {useHistory} from "react-router-dom"

function Cadastro() {
    const history = useHistory();
    function cadastro(){
        history.push("perfil");
    }
    
            return ( 
              
                <div className ="Pagina-Cadastro">

                    <div className="Parte1">
                        <Form>
                            <div className = "titulo-cadastro">
                            <h1>Cadastro</h1>
                            <p>
                            </p>                    
                            </div>
  
                            <Form.Group controlId="formBasicName">
                            <Form.Label>Nome da Empresa</Form.Label>
                                <Form.Control type="name" placeholder="Nome" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Para Login</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Digite uma senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Empresa" />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>CNPJ / CPF</Form.Label>
                                <Form.Control type="name" placeholder="Ex: 99.999.999/9999-99" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Área de atuação do empreendimento</Form.Label>
                                <Form.Control type="name" placeholder="Ex: artesanato, alimentos, vestuário, outros" />
                            </Form.Group>
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                            <Form.Label>Outros</Form.Label>
                                <Form.Control type="outros" placeholder="Outros" />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>Telefone para contato</Form.Label>
                                <Form.Control type="name" placeholder="Ex: (99)99999-9999" />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                            <Form.Label>Endereço</Form.Label>
                                <Form.Control type="name" placeholder="Av. Primeiro" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="name" placeholder="Numero" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control type="name" placeholder="Complemento" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Descrição sobre o empreendimento</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Eu não sou um robô. 🕵🏾" />
                            </Form.Group>
                            <div className = "Button-Cadastrar"> 
                            <Button  variant="primary" size="lg" block onClick={cadastro}>CADASTRAR</Button>   
                            </div>
                            <p>

                            </p>
                        </Form>
                    </div>
                    <AddButon/>

                </div>
            );
}

export default Cadastro;