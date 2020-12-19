import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import CardDeck from 'react-bootstrap/CardDeck';
import udacity_frontend from "../images/frontend_development/Front-End Web Developer.jpg";
import edx_html from "../images/frontend_development/HTML5.0x HTML5 and CSS Fundamentals Certificate.jpg";
import edx_mit from "../images/software_development/MITx 6.00 Introduction to Computer Science and Programming Using Python Certificate.jpg";
import udacity_data_science from "../images/data_science/Programming for Data Science.jpg";
import edx_ibm_data_science_intro from "../images/data_science/IBM ML0101EN Machine Learning with Python A Practical Introduction.jpg";
import edx_ibm_data_science_101 from "../images/data_science/IBM PY0101EN Python 101 for Data Science.jpg";
import edx_ibm_data_science_analyze from "../images/data_science/IBM DA0101EN Analyzing Data with Python.jpg";
import edx_ibm_data_science_visualize from "../images/data_science/IBM DV0101EN Visualizing Data with Python.jpg";
import edx_ibm_keras_intro from "../images/data_science/IBM ML0101EN Machine Learning with Python A Practical Introduction.jpg";
import datacamp_intro_data_science from "../images/data_science/DataCamp Introduction to Data Science in Python.jpg";
import datacamp_intermidiate_python from "../images/software_development/DataCamp Intermediate Python.jpg"
import datacamp_intro_python from "../images/software_development/DataCamp Introduction to Python.jpg"

// Local component import
import Cert from './CertCard/CertCard';

class MyCerts extends React.Component {
    constructor(props) {
        super(props);       
    }
    state = {
        showCerts: false,
        certs: [
            {title: 'MITx 6.00 Introduction to Computer Science and Programming Using Python', date: '08-03-2017', image: edx_mit},
            {title: 'HTML5.0x HTML5 and CSS Fundamentals', date: '08-17-2017', image: edx_html},
            {title: 'IBM ML0101EN Machine Learning with Python A Practical Introduction', date: '11-25-2018', image: edx_ibm_data_science_intro},
            {title: 'Udacity Programming for Data Science', date: '02-15-2019', image: udacity_data_science},
            {title: 'IBM DL0101EN: Deep Learning Fundamentals with Keras', date: '03-21-2019', image: edx_ibm_keras_intro},
            {title: 'IBM DA0101EN: Analyzing Data with Python', date: '04-05-2019', image: edx_ibm_data_science_analyze},
            {title: 'IBM DV0101EN: Visualizing Data with Python', date: '05-20-2019', image: edx_ibm_data_science_visualize},
            {title: 'IBM PY0101EN: Python 101 for Data Science', date: '05-23-2019', image: edx_ibm_data_science_101},
            {title: 'Udacity Front-End Web Developer', date: '08-23-2019', image: udacity_frontend},
            {title: 'DataCamp Introduction to Python', date: '05-17-2020', image: datacamp_intro_python},
            {title: 'DataCamp Introduction to Data Science in Python', date: '05-18-2020', image: datacamp_intro_data_science},
            {title: 'DataCamp Intermediate Python', date: '05-20-2020', image: datacamp_intermidiate_python},
        ]
    }

    // Toggle to show / hide certificates
    toggleCertsHandler = () => {
        const doesShow = this.state.showCerts;
        this.setState({showCerts: !doesShow})
    }

    render() {
        let certsStatus = null;
        if (!this.state.showCerts) {
            certsStatus = (
                <Row>
                    <Col>
                        <h2 style={{cursor: "pointer"}} onClick={this.toggleCertsHandler} className="display-4 text-center">See Certificates</h2>
                    </Col>
                </Row>
            );
        }
        else (
            certsStatus = (
                <Row>
                    <Col>
                        <h2 style={{cursor: "pointer"}} onClick={this.toggleCertsHandler} className="display-4 text-center">Hide Certificates</h2>
                    </Col>
                </Row>
            )
        )
        return (
            <Container id="certs" fluid className="certs-container py-5 text-dark" fluid>
                {certsStatus}
                { this.state.showCerts ?
                    <div>
                        <Row>
                            {this.state.certs.map((cert, index) => {
                                return <Cert
                                    cert={cert.image}
                                    key={cert.title}/>
                            })}
                        </Row>
                    </div> : null}
            </Container>
        )
    }
}

export default MyCerts





                    // <Row>
                    //     <Col>
                    //         <CardDeck className="py-2">
                    //             <CertCard title={this.state.certs[0].title} date={this.state.certs[0].date} certImage={edx_mit}></CertCard>
                    //             <CertCard title={this.state.certs[1].title} date={this.state.certs[1].date}></CertCard>
                    //             <CertCard title={this.state.certs[2].title} date={this.state.certs[2].date}></CertCard>
                    //             <CertCard title={this.state.certs[3].title} date={this.state.certs[3].date}></CertCard>
                    //         </CardDeck>
                    //         <CardDeck className="py-2">
                    //             <CertCard title={this.state.certs[4].title} date={this.state.certs[4].date}></CertCard>
                    //             <CertCard title={this.state.certs[5].title} date={this.state.certs[5].date}></CertCard>
                    //             <CertCard title={this.state.certs[6].title} date={this.state.certs[6].date}></CertCard>
                    //             <CertCard title={this.state.certs[7].title} date={this.state.certs[7].date}></CertCard>
                    //         </CardDeck>
                    //         <CardDeck className="py-2">
                    //             <CertCard title={this.state.certs[8].title} date={this.state.certs[8].date}></CertCard>
                    //             <CertCard title={this.state.certs[9].title} date={this.state.certs[9].date}></CertCard>
                    //             <CertCard title={this.state.certs[10].title} date={this.state.certs[10].date}></CertCard>
                    //             <CertCard title={this.state.certs[11].title} date={this.state.certs[11].date}></CertCard>
                    //         </CardDeck>
                    //     </Col>
                    // </Row>