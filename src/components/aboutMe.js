import React from 'react';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import tulsa from '../images/tulsa.jpg';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row id="about" className="bg-white py-4" noGutters>
                <Col className="py-3" sm="12" lg="6">
                    <div align="center">
                        <Image className="img-tulsa align-self-center py-3" src={tulsa} rounded></Image> 
                    </div>
                </Col>
                <Col sm="12" md="12" lg="6" align="center" className="text-center py-3">
                    <Row>
                        <Col align="center" className="text-center" md={{ offset: 1, span: 10 }}>
                            <h2 className="display-4">Who I Am</h2>
                            <p className="lead">I live in Tulsa with my wife and two dogs.  I love all things coffee, be it espresso, pour over, drip and more!  I am a licensed pharmacist in Oklahoma and Kansas.  I currently work as a clinical product analyst driving the future of healthcare software.  My favorite pasttime involves playing with all things technology: frontend Javascript, data science with Python, and automation with Ansible.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default AboutMe

