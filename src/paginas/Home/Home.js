import React from "react";
import {Link} from "react-router-dom";
import AddButton from "./AddButton"
import Bar from "./Bar"
import "./Home.css"
import { Button} from "react-bootstrap"



function Home() {
    return( 
        <div>
        <div className = "Home">
        <Bar/> 
         
         <Button variant="inherit">
        <Link to="cadastro">Cadastro</Link></Button>
        <Button variant="inherit">
        <Link to="empreendimentos">Empreendimentos</Link></Button>
        <Button variant="inherit">
        <Link to="empresas">Empresas</Link></Button>
        <Button variant="inherit">
        {/*<Link to="login">Login</Link></Button>
        <Button variant="inherit">
        <Link to="perfil">Perfil</Link></Button>
        <Button variant="inherit">*/}
        <Link to="quemsomos">Quem Somos</Link></Button>
        <AddButton/>
        </div>
        </div>

    );
}

export default Home;