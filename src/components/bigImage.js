import React from 'react';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel'
import backdrop from '../images/backdrop.jpg';

function XlScreen(props) {
    return (
        <div>
            <Row id="home" noGutters className="text-center">
                <Col>
                    <Image className="img-grayscale" src={backdrop} fluid></Image>
                </Col>
            </Row>
            <Row className="caption text-center" noGutters>
                <Col>
                    <p className="display-3 font-weight-bold text-light">Technology Enthusiast</p>
                </Col>
                <Col>
                    <p className="display-3 font-weight-bold text-dark">Hobbyist Programmer</p>
                </Col>
                <Col>
                    <p className="display-3 font-weight-bold text-light">Product<br />Analyst</p>
                </Col>
            </Row>
        </div>   
    )
}

function LgScreen(props) {
    return (
        <Carousel slide={false} interval={2000} controls={false}>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>
                <Carousel.Caption className="caption">
                    <h1 className="display-3 caption-item font-weight-bold">Technology<br />Enthusiast</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>                
                <Carousel.Caption className="caption">
                    <h1 className="display-3 caption-item font-weight-bold">Hobbyist<br />Programmer</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>
                <Carousel.Caption className="caption">
                    <h1 className="display-3 caption-item font-weight-bold">Product<br />Analyst</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

function MdSmScreen(props) {
    return (
        <Carousel slide={false} interval={2000} controls={false}>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>
                <Carousel.Caption className="caption">
                    <h1 className="caption-item font-weight-bold">Technology<br />Enthusiast</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>                
                <Carousel.Caption className="caption">
                    <h1 className="caption-item font-weight-bold">Hobbyist<br />Programmer</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="img-grayscale" src={backdrop} fluid></Image>
                <Carousel.Caption className="caption">
                    <h1 className="caption-item font-weight-bold">Product<br />Analyst</h1>
                </Carousel.Caption>
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
            <div>
                {isMobile ? (<NoXlScreen />) : (<XlScreen />)}
            </div>
        )
    }
}

export default MyBackdrop 