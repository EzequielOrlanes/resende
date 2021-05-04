import React from "react";
import "./Home.css"
import Menu from "../Menu"



function Home() {
    return( 
        
        <div className = "pag-home"><Menu/>
        <div className = "Home" >
        <h1> Home</h1>
         
        {/*<Button variant="inherit">
        <Link to="cadastro">Cadastro</Link></Button>
        <Button variant="inherit">
        <Link to="empreendimentos">Empreendimentos</Link></Button>
        <Button variant="inherit">
        <Link to="empresas">Empresas</Link></Button>
        <Button variant="inherit">
        <Link to="login">Login</Link></Button>
        <Button variant="inherit">
        <Link to="perfil">Perfil</Link></Button>
        <Button variant="inherit">
        <Link to="quemsomos">Quem Somos</Link></Button>*/}
        </div>
        </div>

    );


}

export default Home;