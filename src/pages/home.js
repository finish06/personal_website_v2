import React from 'react';
import MyNavbar from '../components/navbar.js';
import AboutMe from '../components/aboutMe.js';
import MyResume from '../components/resume.js';
import MyCerts from "../components/certs.js";
import MyBackdrop from '../components/bigImage.js';
import Container from "react-bootstrap/Container";


function Home() {
  return (
    <Container fluid className="px-0">
      <MyNavbar />
      <MyBackdrop />
      <AboutMe />
      <MyResume />
    </Container>
  );
}

export default Home;
