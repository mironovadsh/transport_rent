import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Context} from "../index";
import { Row} from 'react-bootstrap';
import TSItem from './TSItem';

const TSlist = observer(() => {
    const {TS} = useContext(Context)

    return (
        <Row className="d-flex">
            {TS.TS.map(TS =>
                <TSItem key={TS.id} TS={TS}/>
            )}
        </Row>
    );
});




export default TSlist;