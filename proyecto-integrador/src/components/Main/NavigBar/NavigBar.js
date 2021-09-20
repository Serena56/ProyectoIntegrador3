import React, {Component} from 'react'
import './NavigBar.css';
import MovieDB from '../MovieDB/MovieDB'

let urlPopular = 'https://api.themoviedb.org/3/movie/popular'

class NavigBar extends Component{
    constructor(){
        super();
        this.state={
            standardUrl: urlPopular,
        }
    }
        render(){
            return(
                <React.Fragment>
                <header className="Navbar">
                <nav>
                <img className='logo' src="/popcorn.svg" alt="Popcorn Logo"/>
                <h4>PelisPedia</h4>
                </nav> 
                <nav>
                    <ul className='nav_links'>
                        <li><a href="/" className="hipervinculo" >New features cooming soon</a></li>
                    </ul>
                </nav>
            </header>
            <main>                       
                <MovieDB standardUrl={this.state.standardUrl} />                          
            </main>
            </React.Fragment>
            )
        }
}

export default NavigBar