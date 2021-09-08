import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const NavigBar = () => {

        return(
            <div>
                <Navbar className="navbarHeader" bg="dark" variant="white" expand='lg'>
                
                    <Container className="containerHeader"> 
                    
                    
                    <Navbar.Brand href="#home">
                        <img alt="" src="/popcorn.svg" width="50" height="50" className="logoHeader" />{' '}PELISPEDIA
                    <Nav className="ol-header" >
                     <Nav.Link href="#action1" className="li-header" > POPULAR</Nav.Link>
                        <Nav.Link href="#action1" className="li-header"> TOP RATED</Nav.Link>
                    </Nav>
                    </Navbar.Brand>
                    
                    </Container>
                </Navbar>


            </div>
        )

}

export default NavigBar