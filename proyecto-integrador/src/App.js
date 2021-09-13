import React from 'react';
import MovieDB from './components/Main/MovieDB/MovieDB';
import Navbar from './components/Main/NavigBar/NavigBar';
import Footer from './components/Footer/Footer'

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
            <Footer />
        

    </div>
  );
}


export default App;
