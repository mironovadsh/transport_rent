import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {TS} = useContext(Context)
    return (
        <ListGroup>
            {TS.types.map(type =>
             <ListGroup.Item 
                action 
                active={type.id === TS.selectedType.id}
                onClick={() => TS.setSelectedType(type)}
                key={type.id}>
                 {type.name}
             </ListGroup.Item>
            )}
      </ListGroup>


    );
});

export default TypeBar