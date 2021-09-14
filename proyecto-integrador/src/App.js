import React from 'react';
import MovieDB from './components/MovieDB/MovieDB';
import Disposicion from "./components/Disposicion/Disposicion.js";
import Navbar from './components/NavigBar/NavigBar'
import Footer from './components/Footer/Footer';

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
        <Footer/>
    </div>
  );
}


export default App;
