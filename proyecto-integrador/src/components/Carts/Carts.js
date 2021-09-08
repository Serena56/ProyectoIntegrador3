import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Carts.css';

const Carts = (props) => {
    console.log(props)
    return(
    <div className="card-container">        
        <Col>
                <Card className='movie-card'>
                    <Card.Img className='movie-card-img' variant="top" src={`http://image.tmdb.org/t/p/original/${props.data.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='movie-card-title'>{props.data.original_title}</Card.Title>
                        <Card.Text>
                        {props.data.overview}
                        </Card.Text>
                        <Button variant="primary" className='movie-card-somewhereButton'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    
    )}

export default Carts