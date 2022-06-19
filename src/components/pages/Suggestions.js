import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import PageLayout from '../layouts/PageLayout';
import EmptySubBody from '../presentational/EmptySubBody';
import Heading from '../presentational/Heading';
import Suggestion from '../presentational/Suggestion';
import axios from 'axios';

// https://www.randomuser.me/api/?page=1&results=20


export default function Suggestions(){

    const [ nannies, setNannies ] = useState([]);

    useEffect(()=>{
        axios("https://www.randomuser.me/api/?page=1&results=20")
        .then(items => {
            setNannies(items.data.results)
        })
    }, [])
    
    return(
        <PageLayout>
            <EmptySubBody>
                <Heading title = "Suggestions" />
                <Container fluid>
                    <Row>
                        {nannies.map((item, key) => <Suggestion key = {key} nanny = {item} />)}
                    </Row>
                </Container>
            </EmptySubBody>
        </PageLayout>
    )
}