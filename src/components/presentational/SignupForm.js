import { useState } from 'react';
import { TextField, InputLabel, MenuItem, FormControl, Select, CircularProgress  } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import {axiosPostPreload as axios} from '../../helpers/axiosPreloader';
import SnackBar from '../feedback/SnackBar';

export default function SignupForm({role}){
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phoneNumber: "", password: "", retypePassword: "", location: "", role, 
    })
    const [ message, setMessage ] = useState({
        show: false, severity: "", message: ""
    })

    const resetForm = () => {
        setFormData({
            firstName: "", lastName: "", email: "", phoneNumber: "", password: "", retypePassword: "", location: "", role, 
        })
    }

    const resetMessage = () => {
        setMessage({
            show: false, severity: "", message: ""
        })
    }

    const setState = e => {
        setFormData({
            ...formData, [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axios(`/auth/register/${formData.role}`, formData)
        .then(data=>{
            console.log(data);
            setMessage({
                show: true, severity: 'success', message: 'Account successfully created.'
            })
            setLoading(false);
            // resetForm();
        })
        .catch(err => {
            console.log(err);
            setMessage({
                show: true, severity: 'error', message: 'Error creating account.'
            })
            setLoading(false);
        })
        // setMessage({
        //     show: true, severity: 'error', message: "Form submitted"
        // })
    }
    
    return (
        <div>
            <SnackBar open={message.show} severity={message.severity} handleClose={resetMessage} message = {message.message} />
            <form onSubmit = {handleSubmit} >
                <Container>
                    <Row>
                        <Col>
                            <TextField name = "firstName" value = {formData.firstName} onChange = {setState} type = "text" className = "input-fields" label = "First name" variant = "standard" />
                        </Col>
                        <Col>
                            <TextField name = "lastName" value = {formData.lastName} onChange = {setState} type = "text"  className = "input-fields" label = "Last name" variant = "standard" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField name = "phoneNumber" value = {formData.phoneNumber} onChange = {setState} type = "tel" className = "input-fields" label = "Phone number" variant = "standard" />
                        </Col>
                        <Col>
                            <TextField name = "email" value = {formData.email} onChange = {setState} type = "email" className = "input-fields" label = "Email address" variant = "standard" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField name = "password" value = {formData.password} onChange = {setState} type = "password" className = "input-fields" label = "Password" variant = "standard" />
                        </Col>
                        <Col>
                            <TextField name = "retypePassword" value = {formData.retypePassword} onChange = {setState} type = "password" className = "input-fields" label = "Retype password" variant = "standard" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl sx = {{width: "100%", textAlign: 'center'}}variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                                <Select 
                                    name = "location"
                                    value = {formData.location}
                                    onChange = {setState}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Location"
                                >
                                    <MenuItem value="Kaduna">Kaduna</MenuItem>
                                    <MenuItem value="Abuja">Abuja</MenuItem>
                                    <MenuItem value="Lagos">Lagos</MenuItem>
                                    <MenuItem value="Katsina">Katsina</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>
                    <Row className = "text-center py-4">
                        <button disabled = {loading} className = {`call-to-action ${!loading?'secondary-bg':''}`}>{loading?<CircularProgress color="inherit" />:'Signup'}</button>
                    </Row>
                </Container>
            </form>
        </div>
    )
}