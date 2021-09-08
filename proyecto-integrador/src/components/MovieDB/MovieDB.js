import React, {Component} from 'react';
import Carts from '../Carts/Carts'
import Row from 'react-bootstrap/Row'

const styleBoton = {
    margin: 'auto',
    textAlign: 'center',  
    display: 'flex',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: '25px',
    marginBottom: '25px'
}

class MovieDB extends Component{

    constructor(){
        super();
        this.state = {
            peliculas:[],
            isLoaded: false,
            urlKey: '?api_key=6d28a46fc010c27c72c60e718140556a',
            urlPopularMovies: 'https://api.themoviedb.org/3/movie/popular',
            nmrDePagina: 2
        }
    }
    componentDidMount(){
        fetch(this.state.urlPopularMovies+this.state.urlKey)
            .then( response => response.json() )
            .then( data => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    isLoaded: true,
                    peliculasImagen: data.results,
            }) 
            })
            .catch( error => console.log(error));
            
    }
    addMorePopular(){
        this.setState({
            nmrDePagina: this.state.nmrDePagina + 1
        }, () => console.log(this.state.peliculas))
        fetch(this.state.urlPopularMovies+this.state.urlKey+'&page='+this.state.nmrDePagina)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                 //   personajesIniciales: this.state.personajes.concat(data.results)
                })
            })
            
    }
          

    render(){
        return(
            <div>
            <button type="button" style={styleBoton} onClick={() => this.addMorePopular()}>Cargar más tarjetas</button>
            <container>
                <Row xs={1} md={5} className="g-4"> 
                    {
                  this.state.peliculas.map( (characterData, idx) => <Carts data={characterData} key={characterData.name + idx}  />) 
                    }
                </Row>
            </container>
            </div>    

            
        )
        
            //   document.getElementById('root'), onClick=this.veintemas()}
     
           // <Carts data={this.state.peliculas} /> 
           // <button onClick={() => this.veintemas()}> mas </button>
           

}}

export default MovieDB