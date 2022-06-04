import {Card,Col} from "react-bootstrap";
import React from 'react';
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import { TS_ROUTE } from "../utils/consts";
import {REACT_STATIC_URL} from '../config';

const TSItem = ({TS}) => {
const history = useHistory()
console.log(process.env);

    return(
        <Col md={3} className={"mt-3"} onClick={() => history.push(TS_ROUTE + '/' + TS.id)}>
            <Card style={{width:150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={REACT_STATIC_URL + TS.img} style={{'objectFit': 'contain'}}/>
                <div className="text-black-50"> 
                {TS.name}
                </div>



            </Card>
        </Col>
           
                
                
              


        

    );
};

export default TSItem;