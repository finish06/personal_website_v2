//import './CertCard.css'
import React from 'react';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const cert = (props) => {
    return (
        <Col  className="py-3" md={6} lg={4} xl={3}>
            <Image src={props.cert} rounded fluid></Image>
        </Col>
    )
}

export default cert;