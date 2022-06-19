import { Container, Row, Col } from 'react-bootstrap';
import { Paper } from '@mui/material';
import Lottie from 'react-lottie';

export default function WorkFlow({workflow}){
    return (
        <Container>
            <Row className = "text-center mb-3">
                <h2>How our service works.</h2>
            </Row>
            <Row>
                {workflow.map((item, key)=>(
                <Col md = {4} key = {key} >
                    <Paper variant="outlined" className = "p-5"> 
                        <Lottie
                            options={item.lottie}
                            height= {200}
                            width= {200}
                        />
                        <div>
                            <h4>{item.head}</h4>
                            {item.text}
                        </div>
                    </Paper>
                </Col>
                ))}
            </Row>
        </Container>
    )
}