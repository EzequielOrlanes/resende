import React, { useState, useEffect } from "react";
import {Drawer, List, ListItem, ListItemText, Typography, IconButton, AppBar, Toolbar, Avatar, Button} from  "@material-ui/core";
import {MdHome, MdPerson, MdLaptop, MdMenu, MdExplicit, MdHelpOutline, MdLocationCity} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Menu.css";
import {useHistory} from "react-router-dom";
import api from "../../services/api";
import { logout } from "../../services/auth";

function Menu (props){
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);
    const [NomeEmp, setNomeEmp] = useState();

    const user_id = localStorage.getItem("getUser_Id");

    useEffect(() => {
        async function getUsuario() {
          var response = await api.get("/users/" + user_id);
          setNomeEmp(response.data.NomeEmp);
        }
        getUsuario();
      }, []);



    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName)
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    async function handlelogout(e) {
        e.preventDefault();
        try{
            logout();
            localStorage.removeItem("getUser_Id");
            alert("Logout Realizado com sucesso!");
            history.push("/home");
        } catch (error) {
            if (error.response.status === 403) {
              alert("Credenciais Invalidas!");
            } else {
              alert(error.response.data.notification);
            }
            console.warn(error);
          }

    }

    const pages = [

        {
             pathName: "/home",
             icon: <MdHome/>,
             text: "Home",
        },

        {
            pathName: "/perfil",
            icon: <MdPerson/>,
            text: "Perfil",
        },

        {
        pathName: "/login",
        icon: <MdLaptop/>,
        text: "Login",
        },

        {
        pathName: "/empreendimentos",
        icon: <MdExplicit/>,
        text: "Empreendimentos",
        },


        {
        pathName: "/quemsomos",
        icon: <MdHelpOutline/>,
        text: "Quem Somos",
        },   

    ];

    const getUser = localStorage.getItem("getUser");
    // const getFoto = localStorage.getItem("getFoto");



    return (
        <>
            <AppBar position="static" style= {{backgroundColor: "Transparent"}}>
                {props.children}
                <Toolbar className="barra">
                    <IconButton
                        edge="start" 
                        aria-label="menu"
                        onClick ={() => handleDrawer(!open)}>
                        
                        <MdMenu/>
                        
                    </IconButton>

                    <div class="elemento">
                        <img className='e1' src= "./imagem/Logo4.png"/> 
                        <img className='e2' src= "./imagem/Loguinho.png"/> 
                    </div>

                
                <div className='uni'>
                    <div className='avatar'>{NomeEmp}
                    
                        <div className='grid'>
                        <Avatar src='logoavatar'></Avatar>
                        </div>
                        </div>
                        <div className='uni2'>
                        <Button  onClick={handlelogout}>Logout</Button></div>
                        
                </div>

                </Toolbar>

            </AppBar>

            <Drawer open={open} onClose={() => handleDrawer(false)}>
                <List className="Drawer">
                {pages.map((listItem)=> {
                    return(
                        <ListItem 
                            button
                            selected = {currentPage === listItem.pathName}
                            onClick={()=> {handleClick(listItem.pathName)}}>
                            <IconContext.Provider value={{color: "#343434", size: "1.5em"}}>  
                            {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className = "listText">
                                <Typography>{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })}
                </List>
            </Drawer>
        </>
    );
}

export default Menu;


/*<div className="userContainer">
                        <p className="userName"> Resende Business</p>
                      
                            <img scr="/imagem/Logo.png"/>

                    </div>*/ 



                    