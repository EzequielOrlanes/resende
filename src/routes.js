import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import Empreendimentos from "./paginas/Empreendimentos";
import Empresas from "./paginas/Empresas";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Perfil from "./paginas/Perfil";
import QuemSomos from "./paginas/QuemSomos";
import Menu from "./paginas/Menu";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>           
                <Route path="/Login" component={Login}/>
                <Route path="/Empreendimentos" component={Empreendimentos}/>
                <Route path="/Empresas" component={Empresas}/>
                <Route path="/Perfil" component={Perfil}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/QuemSomos" component={QuemSomos}/>
                <Route path="/" component={UserMenu}/>
            </Switch>
        </BrowserRouter>

    );
}

function UserMenu(){
    return (
        <Menu>
           <Switch>           
                <Route path="/home" component={Home}/>
                <Route component={() => <Redirect to="/home"></Redirect>}/>
            </Switch> 
        </Menu>
    )
}

export default Routes;