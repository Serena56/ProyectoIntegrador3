import React from 'react';
import MovieDB from './components/Main/MovieDB/MovieDB';
import Disposicion from "./components/Disposicion/Disposicion.js";
import Navbar from './components/NavigBar/NavigBar'
import Footer from './components/Footer/Footer';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {        
  
    return (
    <div>
        <Navbar />

        < Disposicion />
        
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
            
            <section className="card-container">
                <article>
                    <MovieDB />
                </article>
            </section>
        </main>
        <br/>
        <br/>
            <Footer />
        

    </div>
  );
}


export default App;
