import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import udacity_frontend from "../images/frontend_development/Front-End Web Developer.jpg";
import edx_html from "../images/frontend_development/HTML5.0x HTML5 and CSS Fundamentals Certificate.jpg";
import edx_mit from "../images/software_development/MITx 6.00 Introduction to Computer Science and Programming Using Python Certificate.jpg";
import udacity_data_science from "../images/data_science/Programming for Data Science.jpg";
import edx_ibm_data_science_intro from "../images/data_science/IBM ML0101EN Machine Learning with Python A Practical Introduction.jpg";
import edx_ibm_data_science_101 from "../images/data_science/IBM PY0101EN Python 101 for Data Science.jpg";
import edx_ibm_data_science_analyze from "../images/data_science/IBM DA0101EN Analyzing Data with Python.jpg";
import edx_ibm_data_science_visualize from "../images/data_science/IBM DV0101EN Visualizing Data with Python.jpg";
import edx_ibm_keras_intro from "../images/data_science/IBM ML0101EN Machine Learning with Python A Practical Introduction.jpg";

class MyCerts extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container id="certs" className="bg-dark py-5 text-light" fluid>
                <Row>
                    <Col md={{offset: 1}}>
                        <h2 className="display-4">Certificates</h2>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <h3>Frontend Development</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4, offset: 2}}>
                        <Image src={udacity_frontend} rounded fluid></Image>
                    </Col>
                    <Col className="my-2"  md={{ span: 6 }} lg={{span: 4}}>
                      <Image src={edx_html} rounded fluid></Image>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col align="center">
                        <h3>Software Development</h3>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{ span: 6 }} lg={{ span: 4, offset: 4 }}>
                        <Image src={edx_mit} rounded fluid></Image>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col align="center">
                        <h3>Data Science</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4}}>
                        <Image src={udacity_data_science} rounded fluid></Image>
                    </Col>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4}}>
                      <Image src={edx_ibm_data_science_intro} rounded fluid></Image>
                    </Col>
                    <Col className="my-2" md={{ span: 6 }}  lg={{span: 4}}>
                        <Image src={edx_ibm_data_science_101} rounded fluid></Image>
                    </Col>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4}}>
                      <Image src={edx_ibm_data_science_analyze} rounded fluid></Image>
                    </Col>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4}}>
                        <Image src={edx_ibm_data_science_visualize} rounded fluid></Image>
                    </Col>
                    <Col className="my-2" md={{ span: 6 }} lg={{span: 4}}>
                      <Image src={edx_ibm_keras_intro} rounded fluid></Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MyCerts