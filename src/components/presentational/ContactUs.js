import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';

export default function ContactUs(){
    const [formData, setFormData] = useState({
        fullName: "", email: "", message: ""
    })

    const setFullName = e => setFormData({...formData, fullName: e.target.value });
    const setEmail = e => setFormData({...formData, email: e.target.value });
    const setMessage = e => setFormData({...formData, message: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    
    return(
        <Container className = "p-4">
            <Row className = "my-5 p-5 border">
                <Row className = "text-center mb-3">
                    <h2>Contact Us</h2>
                </Row>
                <Row>
                    <form onSubmit = {handleSubmit}>
                        <Row className = "py-3">
                            <Col md={6}>
                                <TextField type = "text" id="standard-basic" label="Full name" variant="standard" className = "input-fields" value = {formData.fullName} onChange = {setFullName} />
                            </Col>
                            <Col md={6}>
                                <TextField type = "email" id="standard-basic" label="Email Address" variant="standard" className = "input-fields" value = {formData.email} onChange = {setEmail} />
                            </Col>
                        </Row>
                        <Row className = "py-3">
                            <Col>
                                <TextField
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    className = "input-fields"
                                    value = {formData.message}
                                    onChange = {setMessage} 
                                />
                            </Col>
                        </Row>
                        <Row className = "text-center py-4">
                            <button role = "submit" className = "call-to-action secondary-bg">Send</button>
                        </Row>
                    </form>
                </Row>
            </Row>
        </Container>
    )
}