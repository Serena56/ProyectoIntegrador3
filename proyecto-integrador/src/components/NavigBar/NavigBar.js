import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const NavigBar = () => {

        return(
            <div>
                <Navbar bg="dark" variant="dark" expand='lg'>
                
                    <Container>
                    
                    
                    <Navbar.Brand href="#home">
                        <img alt="" src="/popcorn.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
                    PelisPedia
                    <Nav className="me-auto" >
                     <Nav.Link href="#action1">Popular</Nav.Link>
                        <Nav.Link href="#action1">Top rated</Nav.Link>
                    </Nav>
                    </Navbar.Brand>
                    
                    </Container>
                </Navbar>


            </div>
        )

}

export default NavigBar