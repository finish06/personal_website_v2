import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";


class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="px-0">
                <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Caleb Dunn</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#certs">Certificates</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default MyNavbar