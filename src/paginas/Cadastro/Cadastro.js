import React from "react";
import {Form} from "react-bootstrap"
import "./Cadastro.css"

function Cadastro() {
            return ( 
                <div className ="bas">
                    <div className="conteiner">
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
                                <Form.Control as="select" size="lg">
                                <option>tipo 1</option>
                                <option>tipo 2</option>
                                <option>tipo 3</option>
                            </Form.Control>
                        </Form>
                    </div>
                </div>
            );
}

export default Cadastro;