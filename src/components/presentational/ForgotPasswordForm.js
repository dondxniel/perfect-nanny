import { Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';

export default function LoginForm(){
    return(
        <div>
            <form>
                <Container>
                    <Row>
                        <Col>
                            <TextField  className = "input-fields" label = "Email address" variant = "standard" />
                        </Col>
                    </Row>
                    <Row className = "text-center py-4">
                        <button className = "call-to-action secondary-bg">Send Reset Link</button>
                    </Row>
                </Container>
            </form>
        </div>
    )
}