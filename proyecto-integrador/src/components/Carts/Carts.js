import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Carts.css';

class Carts extends Component {
    constructor(props){
        super(props);
        this.state={
            ver: 'see more',
            estado: true
        }
    }
    verMas(){
        if(this.state.estado){
            this.setState({
                ver: 'see less',
                estado: false
            })
        }else{
            this.setState({
                ver: 'see more',
                estado: true
            })
        }
    }
    render(){
        return(
        <div className="card-container">        
            <Col>
            
                <Card className='movie-card'>
                    <Card.Img className='movie-card-img' variant="top" src={`http://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='movie-card-title'>{this.props.data.original_title}</Card.Title>
                        <Card.Text className={`${this.state.estado ? 'descripcion': 'see-more'}`}>
                        {this.props.data.overview}
                        </Card.Text>
                        <Card.Text className={`${this.state.estado ? 'see-less': 'see-more'}`}>Audiences score: {this.props.data.vote_average}</Card.Text>
                        <Card.Text className={`${this.state.estado ? 'see-less': 'see-more'}`}>Popularity: {this.props.data.popularity}</Card.Text>
                        <Card.Text className={`${this.state.estado ? 'see-less': 'see-more'}`}>Release Date: {this.props.data.release_date}</Card.Text>
                        <Button variant="primary" className='movie-card-somewhereButton' onClick={() => this.verMas()}>{this.state.ver}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        )
    }
  }
  


export default Carts