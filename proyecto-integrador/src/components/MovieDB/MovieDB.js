import React, {Component} from 'react';

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
            })
            .catch( error => console.log(error));
            
    }
    render(){
        return(
            <div>
                <p>Moviees DBB</p>
            </div>
        )
    }

}

export default MovieDB