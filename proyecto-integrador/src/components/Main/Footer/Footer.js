import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {    
    render() {
    return(
        <footer>
        <ul className="teamFooter">
            <li className="li-logo">
            <a href="https://www.themoviedb.org/?language=es">

                <img className="logo" src="/images/logoTMDb.png" alt="Logo TMDB"></img> 
                </a>
                </li>
            <li className="li-footer">
            <a href="https://ar.linkedin.com/in/serena-mar%C3%ADa-dominguez-a48368146"> Serena Dominguez </a>
                 </li>
            <li className="li-footer">
            <a href="/"> Mateo Pizzolo</a>
               </li>
            <li className="li-footer">
            <a href="/"> Nicolas Cavalieri</a>
                </li>
        </ul>
        </footer>        
    )
  }

}


export default Footer;