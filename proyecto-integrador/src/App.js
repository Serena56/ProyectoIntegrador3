import React from 'react';
import MovieDB from './components/MovieDB/MovieDB';
import Navbar from './components/NavigBar/NavigBar'

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const styleBoton = {
        margin: 'auto',
        textAlign: 'center',  
        display: 'flex',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '25px',
        marginBottom: '25px'
    }
        
  
    return (
    <div>
        <Navbar />
        {/*
        Codigo comentado del codigo base
        <header>
            <section>
                <p>Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="">
                    <input type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </section>
        </header>
        */}
        <main>
            <button type="button" style={styleBoton} >Cargar más tarjetas</button>
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
