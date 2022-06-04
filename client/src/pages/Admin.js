import React, {useState} from 'react';
import {Col, Container, Image, Row, Button, Card} from "react-bootstrap"
import CreateBrand from '../modals/CreateBrand';
import CreateTS from '../modals/CreateTS';
import CreateType from '../modals/CreateType';

const Admin = () => {

        const [brandVisible, setBrandVisible] = useState(false)
        const [typeVisible, setTypeVisible] = useState(false)
        const [TSVisible, setTSVisible] = useState(false)

    return (
        <Container className="d-flex flex-column"> 
            <Button variant={"outline-dark"} className={"mt-2"} onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className={"mt-2"} onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className={"mt-2"} onClick={() => setTSVisible(true)}>Добавить ТС</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateTS show={TSVisible} onHide={() => setTSVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;