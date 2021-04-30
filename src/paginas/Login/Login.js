import React from "react";
import {Form, Button} from "react-bootstrap"
import "./Login.css"


function Login() {
    return ( 
<div className = "box">
    <div className ="comteudo">
    <Form>
    <h1> RESENDE BUSINESS </h1>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
    <Form.Control type="password" placeholder="Senha" />
    <Button variant="primary">Login</Button>
    </Form>
    </div>
</div>
    )
}

export default Login;