//import './CertCard.css'
import React from 'react';
import Card from "react-bootstrap/Card";

const certcard = (props) => {
    return (
        <Card>
            <Card.Img variant="top"/>
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="text-center">
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                Completed: {props.date}
            </Card.Footer>
        </Card>
    )
}

export default certcard;