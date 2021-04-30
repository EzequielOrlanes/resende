import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return( 
        <div className = "Home">
        <h1 className = "Home"> Home </h1>
        <Link to="cadastro">Cadastro</Link><h1> </h1>
        <Link to="empreendimentos">Empreendimentos</Link><h1> </h1>
        <Link to="empresas">Empresas</Link><h1> </h1>
        <Link to="login">Login</Link><h1> </h1>
        <Link to="perfil">Perfil</Link><h1> </h1>
        <Link to="quemsomos">Quem Somos</Link><h1> </h1>
        </div>

    );
}

export default Home;