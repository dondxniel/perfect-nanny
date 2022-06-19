import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';

export default function LoginForm({role}){
    const [ formData, setFormData ] = useState({
        email: "", password: "", role
    })
    const handleEmail = e => setFormData({...formData, email: e.target.value});
    const handlePassword = e => setFormData({...formData, password: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(formData);
    }
    
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <TextField type = "email" value = {formData.email} onChange = {handleEmail}  className = "input-fields" label = "Email address" variant = "standard" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField type = "password" value = {formData.password} onChange = {handlePassword}  className = "input-fields" label = "Password" variant = "standard" />
                        </Col>
                    </Row>
                    <Row className = "text-center py-4">
                        <button role = "submit" className = "call-to-action secondary-bg">Login</button>
                    </Row>
                </Container>
            </form>
        </div>
    )
}