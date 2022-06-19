import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { portraitsLottie } from '../../constants/lottieOptions';
import PageLayout from '../layouts/PageLayout';
import EmptySubBody from '../presentational/EmptySubBody';
import Heading from '../presentational/Heading';
import YourNannyDetails from '../presentational/YourNannyDetails';

export default function YourNanny(){
    
    return(
        <PageLayout>
            <EmptySubBody>
                <Heading title = "Your Nanny" />
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <Lottie 
                                options={portraitsLottie}
                                height={300}
                                width={300}
                            />
                        </Col>
                        <Col md={6}>
                            <YourNannyDetails />
                        </Col>
                    </Row>
                </Container>
            </EmptySubBody>
        </PageLayout>
    )
}