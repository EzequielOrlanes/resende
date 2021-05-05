import React from "react";
import {Form, Col,Button} from "react-bootstrap"
import "./Cadastro.css"
import Menu from "../Menu"

function Cadastro() {
            return ( 
              
                <div className ="Pagina-Cadastro">
                    <Menu/>

                    <div className="Parte1">
                        <Form>
                            <h1>Cadaaaa</h1>
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
                            <Form.Group controlId="formBasicName">
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control type="name" placeholder="EX: 99.999.999/9999-99" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Qual a área de atuação do seu empreendimento</Form.Label>
                                <Form.Control as="select" size="lg">
                                <option>Escolha...</option>  
                                <option>Artesanato</option>
                                <option>Alimentos</option>
                                <option>Vestuário</option>
                                <option>Produtos para casa</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Telefone para contato</Form.Label>
                                <Form.Control type="name" placeholder="EX: (99)99999-9999" />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                            <Form.Label>Endereço</Form.Label>
                                <Form.Control type="name" placeholder="Av. Primeiro" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Numero</Form.Label>
                                    <Form.Control type="name" placeholder="Numero" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control type="name" placeholder="Complemento" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Nos fale sobre seu empreendimento</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Eu não sou um robô. 🕵🏾" />
                            </Form.Group>
                            <Button className = "Button-Cadastrar" variant="primary" size="lg" block>
                                Cadastrar 
                            </Button>
                            <p>

                            </p>
                        </Form>
                    </div>

                    <div className ="Parte2">
                        <p> </p>
Aqui 

                    </div>

                </div>
            );
}

export default Cadastro;