import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import Empreendimentos from "./paginas/Empreendimentos";
import Empresas from "./paginas/Empresas";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Perfil from "./paginas/Perfil";
import QuemSomos from "./paginas/QuemSomos";


function Routes(){
    return(
        <BrowserRouter>
            <Switch>           
                <Route path="/Login" component={Login}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Empreendimentos" component={Empreendimentos}/>
                <Route path="/Empresas" component={Empresas}/>
                <Route path="/Perfil" component={Perfil}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/QuemSomos" component={QuemSomos}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;