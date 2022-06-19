import { Container, Row, Col } from 'react-bootstrap';

export default function Heading({title}){
    return(
        <div className = "text-center">
            <Container>
                <Row className = "justify-content-center">
                    <Col md={7}>
                        <h1 className = "heading-title">{title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}