import React from 'react';
import './App.css';
import Counter from './counter.js';
import MyNavbar from './components/navbar.js';
import AboutMe from './components/aboutMe.js';
import Spacer from './components/spacer.js';
import MyResume from './components/resume.js';
import MyCerts from "./components/certs.js";
import MyBackdrop from './components/bigImage.js';
import Container from "react-bootstrap/Container";


function App() {
  return (
    <Container fluid className="px-0">
      <MyNavbar />
      <MyBackdrop />
      <AboutMe />
      <Spacer />
      <MyResume />
      <MyCerts />
    </Container>
  );
}

export default App;


