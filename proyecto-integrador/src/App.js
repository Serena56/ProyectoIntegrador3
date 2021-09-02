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
            <ul className="team">
                <li>Nombre integrante 1</li>
                <li>Nombre integrante 2</li>
                <li>Nombre integrante 3</li>
            </ul>
        </footer>
    </div>
  );
}


export default App;
