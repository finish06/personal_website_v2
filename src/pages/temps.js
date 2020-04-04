import React from 'react';
import MyGraph from '../components/myGraphs.js'
import MyNavbar from '../components/navbar.js';
import Container from "react-bootstrap/Container";


function Home_Temps() {
  return (
    <Container fluid className="px-0">
      <MyNavbar />
      <MyGraph />
    </Container>
  );
}

export default Home_Temps;
