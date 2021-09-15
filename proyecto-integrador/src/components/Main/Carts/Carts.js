import React, {Component} from 'react'
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
                <article className='card'>                   
                    <img className='movie-card-img' variant="top" src={`http://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt=""/>
                    <div>   
                        <h2 className='movie-card-title'>{this.props.data.original_title}</h2>
                        <p className={`${this.state.estado ? 'descripcion': 'see-more'}`}>
                        {this.props.data.overview}
                        </p>
                        <p className={`${this.state.estado ? 'see-less': 'see-more'}`}>Audiences score: {this.props.data.vote_average}</p>
                        <p className={`${this.state.estado ? 'see-less': 'see-more'}`}>Popularity: {this.props.data.popularity}</p>
                        <p className={`${this.state.estado ? 'see-less': 'see-more'}`}>Release Date: {this.props.data.release_date}</p>
                        <button  className='movie-card-somewhereButton' onClick={() => this.verMas()}>{this.state.ver}</button>
                    </div>
                </article>
        )
    }
  }
  


export default Carts