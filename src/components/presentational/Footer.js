import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
    return(
        <Container className = "d-flex justify-content-center">
            <Row className = "text-center my-5 by-5">
                Copyright &copy; 2022.
            </Row>
        </Container>
    )
}