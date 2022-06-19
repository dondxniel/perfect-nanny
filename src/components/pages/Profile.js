import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { portraitLottie } from '../../constants/lottieOptions';
import PageLayout from '../layouts/PageLayout';
import EmptySubBody from '../presentational/EmptySubBody';
import Heading from '../presentational/Heading';
import DisplayProfile from '../presentational/DisplayProfile';
import EditProfile from '../presentational/EditProfile';

export default function Profile(){
    const [ userData, setUserData ] = useState({
        fullName: "", phoneNumber: "", email: "", location: "", nin: "", nannyType: "" 
    })
    const [ editProfile, setEditProfile ] = useState(false);
    const picture = useRef(null);

    const toggleEditProfile = () => setEditProfile(prev=>!prev);
    const selectPicture = () => picture.current.click();
    
    useEffect(()=>{
        setUserData({
            fullName: "John Doe", phoneNumber: "911", email: "jd@gmail.com", location: "Kaduna", nin: "2142354352", nannyType: "Cleaner and baby sitter" 
        })
    }, [])
    
    return(
        <PageLayout>
            <EmptySubBody>
                <Heading title = "Profile" />
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <Lottie 
                                options={portraitLottie}
                                height={300}
                                width={300}
                            />
                            {editProfile&&
                                <div className = "text-center">
                                    <div className = "d-none">
                                        <input ref={picture} type="file" />
                                    </div>
                                    <button className = "call-to-action secondary-bg" onClick = {selectPicture}>Select new photo</button>
                                </div>
                            }
                        </Col>
                        <Col md={6}>
                            {editProfile?<EditProfile user = {userData} />:<DisplayProfile user = {userData} />}
                            <div className = "text-center my-2">
                                {editProfile?
                                    <button onClick={toggleEditProfile} className = "call-to-action btn-danger">Cancel</button>
                                :
                                    <button onClick={toggleEditProfile} className = "call-to-action secondary-bg">Edit Profile</button>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </EmptySubBody>
        </PageLayout>
    )
}