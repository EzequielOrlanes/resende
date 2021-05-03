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
    alert( email+ " " + password);
    history.push("perfil");
}

    return ( 
        <div className = "Pagina-login" > 
        <div className= "box-logomarca"></div>
            <div className = "box-login">
                <Form>
                    <h1 className = "Titulo-login"> Resende Business</h1>
                    <p></p>
                    <div className="Conteudo-box-login">
                        <p className = "Subtitulo-login"> Faça seu Login: </p> 
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                            <Form.Control type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} />
                        <p></p>
                        <Button  variant="primary" onClick={login}>ENTRAR</Button>
                        <p></p>
                        <Link to="cadastro"> Não é cadastrado? </Link><h1> </h1>
                        <Link to=" ">Esqueci minha senha</Link><h1> </h1>
                    </div>
                </Form>
            </div>
            <img id = "foto" src= "imagem/artesanato.jpg" alt=""/>
        </div>
    )
}

export default Login;