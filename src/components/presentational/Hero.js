import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

export default function Hero({
    callToActionLink,
    carouselData
}){
    return (
        <Container fluid>
            <Row className = "hero d-flex text-dark">
                <Col className = "mt-auto">
                    <Carousel>
                        {carouselData.map((item, key)=>(
                        <Carousel.Item key = {key}>
                            <Container>
                                <Row>
                                    <Col className = "text-end d-flex justify-content-end">
                                        <div className = "my-auto">
                                            <h3>{item.head}</h3>
                                            <p>{item.text}</p>
                                            <div>
                                                <Link to = {callToActionLink} className = "call-to-action secondary-bg">Register Here.</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Lottie 
                                            options={item.lottieOptions}
                                            height={400}
                                            width={400}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}