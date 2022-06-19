import { Container, Row, Col } from 'react-bootstrap';
import { Paper } from '@mui/material';

export default function SubBody({children}){
    return (
        <Container>
            <Paper 
                className = "sub-body animate__animated animate__slideInUp "
                variant = "elevation"
                elevation = {6}
            >
                {children}
            </Paper>
        </Container>
    )
}