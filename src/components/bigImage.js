import React from 'react';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel'
import backdrop from '../images/backdrop/hobb_prog_tech_enth_prod_analyst.png';
import hobb_prog_small from '../images/backdrop/hobb_prog_small.png';
import prod_analyst_small from '../images/backdrop/prod_analyst_small.png';
import tech_enth_small from '../images/backdrop/tech_enth_small.png';
import hobb_prog_med from '../images/backdrop/hobb_prog_med.png';
import prod_analyst_med from '../images/backdrop/prod_analyst_med.png';
import tech_enth_med from '../images/backdrop/tech_enth_med.png';

function XlScreen(props) {
    return (
        <div>
            <Row noGutters>
                <Col>
                    <Image className="img-grayscale" src={backdrop} fluid></Image>
                </Col>
            </Row>
        </div>
    )
}

function LgScreen(props) {
    return (
        <Carousel slide={false} interval={2000} controls={false}>
            <Carousel.Item>
                <Image className="img-grayscale" src={prod_analyst_med} fluid></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={tech_enth_med} fluid></Image>                
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={hobb_prog_med} fluid></Image>
            </Carousel.Item>
        </Carousel>
    )
}

function MdSmScreen(props) {
    return (
        <Carousel slide={false} interval={2000} controls={false}>
            <Carousel.Item>
                <Image className="img-grayscale" src={prod_analyst_small} fluid></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={tech_enth_small} fluid></Image>                
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={hobb_prog_small} fluid></Image>
            </Carousel.Item>
        </Carousel>
    )
}

function NoXlScreen(props) {
    if (window.innerWidth > 750) {
        return(LgScreen())
    }
    else {
        return(MdSmScreen())
    }
}

class MyBackdrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: true};
        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener("resize", this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize)
    }

    updateScreenSize() {
        this.setState({ isMobile: window.outerWidth < 1250 });
    }

    render() {
        const isMobile = this.state.isMobile;
        console.log(window.innerWidth)
        console.log(isMobile)
        return (
            <div id="home">
                {isMobile ? (<NoXlScreen />) : (<XlScreen />)}
            </div>
        )
    }
}

export default MyBackdrop 