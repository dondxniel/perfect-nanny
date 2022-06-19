import { Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';

export default function LoginForm(){
    return(
        <div>
            <form>
                <Container>
                    <Row>
                        <Col>
                            <TextField  className = "input-fields" label = "Enter New Password" variant = "standard" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField  className = "input-fields" label = "Re-enter New Password" variant = "standard" />
                        </Col>
                    </Row>
                    <Row className = "text-center py-4">
                        <button className = "call-to-action secondary-bg">Reset Password</button>
                    </Row>
                </Container>
            </form>
        </div>
    )
}