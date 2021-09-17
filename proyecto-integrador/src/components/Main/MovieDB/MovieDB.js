import React, {Component} from 'react';
import Carts from '../Carts/Carts';
import BuscadorTarjetas from '../BuscadorTarjetas/BuscadorTarjetas';
import './MovieDB.css'

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
            peliculasIniciales: [],
            isLoaded: false,
            urlKey: '?api_key=6d28a46fc010c27c72c60e718140556a',
            urlPopularMovies: 'https://api.themoviedb.org/3/movie/popular',
            nmrDePagina: 2,
            disposicionEnRow: true,
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
                    peliculasIniciales: data.results,
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
                this.setState({
                peliculas: this.state.peliculas.concat(data.results)                  
                   })   
                })         
            
    }
    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.peliculasIniciales.filter( 
            pelicula => pelicula.original_title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }
    borrarPeliculas(peliculaABorrar){
        let cartasDespuesDeBorrar = this.state.peliculas.filter(peliculas => peliculas.id !== peliculaABorrar)
        this.setState({
            peliculas : cartasDespuesDeBorrar
        })
    }
    resetMovies(){
        this.setState({
            peliculas: this.state.peliculasIniciales,
            nmrDePagina: 2
        })
    }

    cambiarDisposicion(){
        if (this.state.disposicionEnRow === true) {
         this.setState({
            disposicionEnRow: false
         })
        } else {
         this.setState({
            disposicionEnRow: true
         })
        }
     }
          

    render(){
        if(this.state.isLoaded){
            if(this.state.peliculas < 1) {
                return(
                    <div>               
                        <BuscadorTarjetas filtrar={ (evento) => { this.filtrarPeliculas(evento) } }/>
                        <h2> No movies match your sort</h2>
                    </div>
                )

            } else {
            return(
                <div>
                <BuscadorTarjetas className='buscador' filtrar={ (evento) => { this.filtrarPeliculas(evento) } }/>
                
                <button type="button" onClick={()=>this.cambiarDisposicion()}> CAMBIAR DISPOSICIÓN </button>
                
                    <main className={`cards ${this.state.disposicionEnRow ? "cambiaARow" : "cambiaAColumn"}`}>
                    
                    {
                    this.state.peliculas.map( (characterData, idx) => <Carts data={characterData} key={characterData.name + idx} borrarPelicula={(peliculaABorrar)=>this.borrarPeliculas(peliculaABorrar)}/>)
                    }
                    
                    </main>
                    
                
                <button type="button" style={styleBoton} onClick={() => this.addMorePopular()}>Load more movies</button>
                <button type="button" style={styleBoton} onClick={() => this.resetMovies()}>Reset movies</button>
                
                </div>    

                
            )}
        }else{
            return(
                <p>Loading, this may take a couple of seconds</p>
            )
        }
        
            //   document.getElementById('root'), onClick=this.veintemas()}
     
           // <Carts data={this.state.peliculas} /> 
           // <button onClick={() => this.veintemas()}> mas </button>
           

}}

export default MovieDB