import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {REACT_STATIC_URL} from '../config';
import {RENT_ROUTE} from "../utils/consts";
import {useParams} from 'react-router-dom'
import {fetchOneTS} from "../http/tsAPI";
import {useHistory} from 'react-router-dom'
const TransPage = () => {
    const [TS, setTS] = useState({info: []})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneTS(id).then(data => setTS(data))
    
    }, [])
  
    return (
        
        <Container className="mt-3">
            <Row>
            <Col md={4}>
                <Image width={300} height={300}  src={REACT_STATIC_URL + TS.img} style={{'objectFit': 'contain'}}/>

            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{TS.name}</h2>
                </Row>
                
            </Col>
            <Col md={4}>
                <Card className="d-flex flex-column align-items-center justify-content-around"
                style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}>
                    <h3>{TS.price} рублей в минуту</h3>
                    <Button variant={"outline-dark"} onClick={() => history.push(RENT_ROUTE  + `/${TS.id}`)}> Взять в аренду</Button>
                </Card>
                
            </Col>
            </Row>
            <Row className="d-flex flex-column m-5">
                <h1>Основная информация</h1>
                {TS.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.tittle} : {info.description}
                    </Row>
                
                )}
            </Row>
        </Container>
        

    );
};

export default TransPage;