import React, {Component} from 'react'
import './NavigBar.css';

let urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated'
let urllatest = 'https://api.themoviedb.org/3/movie/latest'
let urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming'
let urlPopular = 'https://api.themoviedb.org/3/movie/popular'

class NavigBar extends Component{
    constructor(){
        super();
        this.state={
            urlMovies: ''
        }
    }
    topRated(){
        this.setState({
            urlMovies: urlTopRated
        })
    }
    latest(){
        this.setState({
            urlMovies: urllatest
        })
    }
    upcoming(){
        this.setState({
            urlMovies: urlUpcoming
        })
    }
    popular(){
        this.setState({
            urlMovies: urlPopular
        })
    }
        render(){
            return(
                <header className="Navbar">
                <nav>
                <img className='logo' src="/popcorn.svg" alt="Popcorn Logo"/>
                <h4>PelisPedia</h4>
                </nav> 
                <nav>
                    <ul className='nav_links'>
                        <li><a href="/" className="hipervinculo" onClick={() => this.upcoming()}>Upcoming</a></li>
                        <li><a href="/" className="hipervinculo" onClick={() => this.latest()}>Latest</a></li>
                        <li><a href="/" className="hipervinculo" onClick={() => this.topRated()}>Top Rated</a></li>
                        <li><a href="/" className="hipervinculo" onClick={() => this.popular()}>Popular</a></li>
                    </ul>
                </nav>
            </header>
            )
        }
}

export default NavigBar