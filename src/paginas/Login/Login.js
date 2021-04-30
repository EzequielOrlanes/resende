import React from "react";
import {Form, Button} from "react-bootstrap"
import "./Login.css"
import {Link} from "react-router-dom";


function Login() {
    return ( 
<div className = "box">
    <div className ="comteudo">
    <Form>
    <h1> RESENDE BUSINESS </h1>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
    <Form.Control type="password" placeholder="Senha" />
    <p></p>
    <Button variant="primary">Login</Button>
    <p></p>
    <Link to="cadastro">Nao é cadastrado?</Link><h1> </h1>
    <Link to=" ">Esqueci minha senha.</Link><h1> </h1>
    </Form>
    </div>
</div>
    )
}

export default Login;