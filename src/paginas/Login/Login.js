import React, {useState} from "react";
import {Form, Button} from "react-bootstrap"
import "./Login.css"
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"


function Login() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const history = useHistory();
        function login(){
            alert("aopa"+ email+ " " + password);
            history.push("perfil");
        }
    return ( 
<div className = "box">
    <div className ="conteudo">
    <Form>
    <h1> RESENDE BUSINESS </h1>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>
    <Form.Control type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} />
    <p></p>
    <Button variant="primary" onClick={login}>Login</Button>
    <p></p>
    <Link to="cadastro">Nao é cadastrado?</Link><h1> </h1>
    <Link to=" ">Esqueci minha senha.</Link><h1> </h1>
    </Form>
    </div>
</div>
    )
}

export default Login;