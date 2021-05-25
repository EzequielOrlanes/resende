import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import Empreendimentos from "./paginas/Empreendimentos";
import Empresas from "./paginas/Empresas";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Perfil from "./paginas/Perfil";
import QuemSomos from "./paginas/QuemSomos";
import SegredosDeMinas from "./paginas/SegredosDeMinas";
import TremDeMinasDecor from "./paginas/TremDeMinasDecor";
import TricoDaVovo from "./paginas/TricoDaVovo";
import AlterarPerfil from "./paginas/AlterarPerfil";
import {isAuthenticated} from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
);


function Routes(){
    return(
        <BrowserRouter>
            <Switch>           
                <Route path="/Login" component={Login}/>
                <Route path="/" component={UserMenu}/>
            </Switch>
        </BrowserRouter>

    );
}

function UserMenu(){
    return (
       
           <Switch>           
                <Route path="/home" component={Home}/>
                <Route path="/Empreendimentos" component={Empreendimentos}/>
                <Route path="/Empresas" component={Empresas}/>
                <Route path="/Perfil" component={Perfil}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/QuemSomos" component={QuemSomos}/>
                <Route path="/SegredosDeMinas" component={SegredosDeMinas}/>
                <Route path="/TremDeMinasDecor" component={TremDeMinasDecor}/>
                <Route path="/TricoDaVovo" component={TricoDaVovo}/>
                <PrivateRoute path="/AlterarPerfil/" component={AlterarPerfil}/>
                <Route component={() => <Redirect to="/home"></Redirect>}/>
            </Switch> 
        
    )
}

export default Routes;