import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Drawer, IconButton } from '@mui/material';
import { MdMenu } from 'react-icons/md';
import SideMenu from './SideMenu';

export default function NavBar () {

    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const [ navOpaque, setNavOpaque ] = useState('no-bg');
    // const [ iconClass, setIconClass ] = useState('text-light');

    const toggleDrawer = () => setDrawerOpen(prev => !prev);
    
    const checkOffsetAndRespond = () => {
        let offsetVal = window.pageYOffset;

        if(offsetVal >= 10){
            setNavOpaque('yes-bg');
            // setIconClass('text-primary-custom')
        }else{
            setNavOpaque('no-bg');
            // setIconClass('text-light')
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', checkOffsetAndRespond)
    })
    
    return (
        <div className = {`navbar-custom ${navOpaque}`}>
            <Container fluid>
                <Row>
                    <Col>
                        <IconButton color="info" onClick={toggleDrawer}><MdMenu className = {`side-menu-buttons text-dark`}/></IconButton>

                        <Drawer
                            anchor={'left'}
                            open={drawerOpen}
                            onClose={toggleDrawer}
                        >
                            <SideMenu toggleDrawer={toggleDrawer} />
                        </Drawer>
                    </Col>
                    <Col className = "text-center">
                        <div className = "py-auto"><Link className = {`header-title text-dark`} to = "/" >Perfect Nanny</Link></div>
                    </Col>
                    <Col></Col>{/* Empty col. Might fit something in later. */}
                </Row>
            </Container>
        </div>
    )
}