import React from 'react';
import MovieDB from './components/MovieDB/MovieDB';
import Disposicion from "./components/Disposicion/Disposicion.js";
import Navbar from './components/NavigBar/NavigBar'

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {        
  
    return (
    <div>
        <Navbar />
        <main>
            
            <section className="card-container">
                <article>
                    <MovieDB />
                </article>
            </section>
        </main>
        <br/>
        <br/>
        <footer>
            <ul className="teamFooter">
                <li className="li-logo">
                <a href="https://www.themoviedb.org/?language=es">

                    <img src="/public/images/logoTMDb.png"></img> 
                    </a>
                    </li>
                <li className="li-footer">
                <a href="https://ar.linkedin.com/in/serena-mar%C3%ADa-dominguez-a48368146"> Serena Dominguez </a>
                     </li>
                <li className="li-footer">
                <a href="https://www.themoviedb.org/?language=es"> Mateo Pizzolo</a>
                   </li>
                <li className="li-footer">
                <a href="https://www.themoviedb.org/?language=es"> Nicolas Cavalieri</a>
                    </li>
            </ul>
        </footer>

    </div>
  );
}


export default App;
