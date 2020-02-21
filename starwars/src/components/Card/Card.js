import React from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import './Card.css'

function CardHolder(props){
    return(
        <Col sm="3">
            <Card body>
            <CardTitle>{props.name}</CardTitle>
            <CardText>Eye Color: {props.color}</CardText>
            </Card>
        </Col>
    );
}

export default CardHolder;