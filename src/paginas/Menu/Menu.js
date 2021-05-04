import React, {useState} from "react";
import {Drawer, List, ListItem, ListItemText, Typography, IconButton, AppBar, Toolbar, Avatar} from  "@material-ui/core";
import {MdHome, MdPerson, MdLaptop, MdMenu, MdExplicit, MdPersonAdd, MdHelpOutline, MdLocationCity} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Menu.css";
import {useHistory} from "react-router-dom";

function Menu (props){
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);
    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName)
    }

    function handleDrawer(isOpen){
        setOpen(isOpen)
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
        pathName: "/cadastro",
        icon: <MdPersonAdd/>,
         text: "Cadastrro",
         },

        {
        pathName: "/empreendimentos",
        icon: <MdExplicit/>,
        text: "Empreendimentos",
        },

        {
        pathName: "/empresas",
        icon: <MdLocationCity/>,
        text: "Empresas",
        },

        {
        pathName: "/quemsomos",
        icon: <MdHelpOutline/>,
        text: "Quem Somos",
        },   

    ];

    return (
        <>
            <AppBar position="static" style= {{backgroundColor: "whitesmoke"}}>
                {props.children}

                <Toolbar style= {{backgroundColor: "whitesmoke"}}>

                    <IconButton
                        edge="start" 
                        aria-label="menu"
                        onClick ={() => handleDrawer(!open)}>
                        <MdMenu/>
                    </IconButton>

                    <div className="userContainer">
                        <p className="userName">Resende Business</p>
                        <Avatar alt="Resende Costa" src="/imagem/Logo.png" />
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