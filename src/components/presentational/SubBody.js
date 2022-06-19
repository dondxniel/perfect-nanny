import { Container, Row, Col } from 'react-bootstrap';
import { Paper } from '@mui/material';
import WorkFlow from './WorkFlow';
import WhyUs from './WhyUs';
import ContactUs from './ContactUs';

export default function SubBody({workflow}){
    return (
        <Container>
            <Paper 
                className = "sub-body animate__animated animate__slideInUp"
                variant = "elevation"
                elevation = {6}
            >
                <WorkFlow workflow={workflow} />
                <WhyUs />
                <ContactUs />
            </Paper>
        </Container>
    )
}