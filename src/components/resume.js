import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import professionalPhoto from '../images/professionalPhoto.jpg';


class MyResume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="px-4 py-5 bg-light" id="resume">
                <Row>
                    <Col className="align-self-center order-lg-1 order-xl-3" lg={{ span: 6 }} xl={{ span: 3 }}>
                        <Row>
                            <Col>
                                <div align="center">
                                  <Image src={professionalPhoto} thumbnail className="img-photo"></Image>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="order-xl-1 order-lg-3 order-md-2" lg={{ span: 12}} xl={{ span: 5 }}>
                         <Row>
                            <Col align="center">
                                <h2 className="display-4">Professional Experience</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <h3>Clinical Product Analyst</h3>
                                    </Col>
                                    <Col>
                                        <h4 align="right">September 2019 - Present</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="pro-location">DrFirst, Tulsa, OK</p>
                                <ul>
                                    <li>Drive product roadmap</li>
                                    <li>Design enhancement requirements and acceptance criteria</li>
                                    <li>Prioritize and rank enhancements and incidents</li>
                                    <li>Collaborate with development and UI/UX</li>
                                    <li>Perofrm User Acceptance Testing</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <h3>Pharmacy Informaticist</h3>
                                    </Col>
                                    <Col>
                                        <h4 align="right">March 2016 - September 2019</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="pro-location">Ascension Technologies, Tulsa, OK</p>
                                <ul>
                                    <li>Develop and maintain pharmacy system standards</li>
                                    <li>Analyze system issues and develop solutions</li>
                                    <li>Coordinate with pharmacy staff to create and maintian pharmacy information solutions</li>
                                    <li>Encourage and assist colleagues in skill development</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <h3>Staff Pharmacist</h3>
                                    </Col>
                                    <Col>
                                        <h4 align="right">December 2014 - Present</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="pro-location">Saint Francis Children's Hospital, Tulsa, OK</p>
                                <ul>
                                    <li>Review medicaton orders for safety and appropriateness</li>
                                    <li>Supervise support staff, e.g. pharmacy technicians and interns</li>
                                    <li>Provide medication information and education as requested</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="order-xl-2 order-lg-2 order-md-3" lg={{span: 6}} xl={{ span: 4 }}>
                        <Row>
                            <Col align="center">
                                <h2 className="display-4">Education</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <h3>Masters of Healthcare Informatics and Information Management</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p className="ed-location">Southwestern Oklahoma State University, Weatherford, OK</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p>Anticipated Spring 2020</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <h3>ASHP-Accredited PGY1 Pharmacy Practice Residency</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p className="ed-location">Wesley Medical Center, Wichita, KS</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p>Summer 2014</p>
                            </Col>
                        </Row>             
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <h3>Doctor of Pharmacy</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p className="ed-location">Drake University, Des Moines, IA</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ offset: 1 }}>
                                <p>Spring 2012</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default MyResume