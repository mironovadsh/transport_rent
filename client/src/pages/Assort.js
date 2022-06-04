import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypesBar';
import {Container} from "react-bootstrap";
import TSlist from '../components/TSlist';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTypes, fetchBrands,fetchTS } from '../http/tsAPI';
const Assort = observer (() => {
    const {TS} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => TS.setTypes(data))
        fetchBrands().then(data => TS.setBrands(data))
        fetchTS().then(data => TS.setTS(data.rows))
    }, [])
    useEffect(() => {
        fetchTS(TS.selectedType.id, TS.selectedBrand.id, TS.page, 2).then(data => {
            TS.setTS(data.rows)
            TS.setTotalCount(data.count)
        })
    }, [TS.page, TS.selectedType, TS.selectedBrand,])

    return (
        <Container> 
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>

                </Col>
                <Col md={9}>
                    <TSlist/>

                </Col>
            
            </Row>
                 
        </Container>
    );
});

export default Assort;