import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ASSORT_ROUTE} from "../utils/consts";
import { login, registration } from "../http/useAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import UserSharing from '../Sharing/UserSharing';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronumic, setPatronumic] = useState('')
    const [phone, setPhone] = useState('')
    const [drive_number, setDriveNumber] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, name, surname, patronumic, phone, drive_number);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(ASSORT_ROUTE)
        } catch (e) {
            //alert(e.response.data.message)
        }
        
        

    }



    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className=" d-flex flex-column">
                {isLogin ?
                <div>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"

                    /> </div>
                    :
                    <div>
                     <Form.Control
                        className="mt-3"
                        placeholder="Введите имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                       

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                       

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите отчество"
                        value={patronumic}
                        onChange={e => setPatronumic(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите номер телефона"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите номер в/у"
                    value={drive_number}
                    onChange={e => setDriveNumber(e.target.value)}
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                    </div>
                }
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            <NavLink to={ASSORT_ROUTE}>
                            {isLogin ? 'Войти' : 'Заре'}
                            </NavLink>
                            <NavLink to={ASSORT_ROUTE}>
                            {'гестрироваться'}
                            </NavLink>
                        </Button>

                    </Row>


                </Form>
            </Card>
        </Container>
    );
});

export default Auth;