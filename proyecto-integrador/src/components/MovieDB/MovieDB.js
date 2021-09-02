import React, {Component} from 'react';
import Carts from '../Carts/Carts'
import Row from 'react-bootstrap/Row'



class MovieDB extends Component{
    constructor(){
        super();
        this.state = {
            peliculas:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        const key = '6d28a46fc010c27c72c60e718140556a'
        fetch('https://api.themoviedb.org/3/movie/popular?api_key='+key)
            .then( response => response.json() )
            .then( data => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    isLoaded: true,
                    peliculasImagen: data.results
            }) 
            })
            .catch( error => console.log(error));
            
    }
    ConfigurationMovie(){
        const key = '6d28a46fc010c27c72c60e718140556a'
        fetch('https://api.themoviedb.org/3/configuration?api_key='+key)
            .then( response => response.json() )
            .then( data => {
                console.log(data)
                
            })
            .catch( error => console.log(error));
    }
      

    render(){
        return(
            <container>
                <Row xs={1} md={5} className="g-4"> 
                    {
                     this.state.peliculas.slice(0, 10).map( (characterData, idx) => <Carts data={characterData} key={characterData.name + idx}  />)
                    }
                    {this.ConfigurationMovie()
                    }
                </Row>
            </container>
                            

            
        )
        
            //   document.getElementById('root'), onClick=this.veintemas()}
     
           // <Carts data={this.state.peliculas} /> 
           // <button onClick={() => this.veintemas()}> mas </button>
           

}}

export default MovieDB