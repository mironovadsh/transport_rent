import React, {useContext} from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Context} from '../index';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {ADMIN_ROUTE, ASSORT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
 const NavBar = observer(() => {
     const {user} = useContext(Context)
     const history = useHistory()

     const logOut = () => {
         user.setUser({})
         user.setisAuth(false)
     }

     return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} to={ASSORT_ROUTE}>Система аренды транспорта "Поехали"</NavLink>
        {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outline-light"}  
                            onClick={() => logOut()}
                            className="ml-2">Выйти</Button>
                            </NavLink>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
        }  
            </Container>
      
      </Navbar>
     );
 });

 export default NavBar