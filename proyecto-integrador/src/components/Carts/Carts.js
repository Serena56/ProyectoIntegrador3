import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Carts.css';

const Carts = (props) => {
    console.log(props)
    return(
    <div >        
        <Col>
                <Card className='cartas'>
                    <Card.Img width="75" height="125" className='cartasMainImg' variant="top" src={`http://image.tmdb.org/t/p/original/${props.data.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='cartasTitulo'>{props.data.original_title}</Card.Title>
                        <Card.Text>
                        {props.data.overview}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    
    )}

export default Carts