import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import PageLayout from '../layouts/PageLayout';
import EmptySubBody from '../presentational/EmptySubBody';
import Heading from '../presentational/Heading';
import { loginLottie } from '../../constants/lottieOptions';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import ForgotPasswordForm from '../presentational/ForgotPasswordForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  
export default function Auth(){
    const [ value, setValue ] = useState(0);

    const handleChange = (e, newVal) => {
        setValue(newVal);
    }
    
    return (
        <PageLayout>
            <EmptySubBody>
                <Heading title = "Login / Sign up" />
                <Container>
                    <Row>
                        <Col md={6}>
                            <Lottie 
                                options = {loginLottie}
                                height={400}
                                width={400}
                             />
                        </Col>
                        <Col md={6}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{style: {background:'rgb(7, 159, 179)'}}}>
                                    <Tab sx={{color: 'rgb(7, 159, 179)'}} label="Forgot Password"/>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <ForgotPasswordForm />
                            </TabPanel>
                        </Col>
                    </Row>
                </Container>

            </EmptySubBody>
        </PageLayout>
    )
}