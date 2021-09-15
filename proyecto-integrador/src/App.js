import React from 'react';
import MovieDB from './components/Main/MovieDB/MovieDB';
import Disposicion from "./components/Disposicion/Disposicion.js";
import NavigBar from './components/Main/NavigBar/NavigBar';
import Footer from './components/Footer/Footer';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {        
  
    return (
    <div>
        <NavigBar />
              
        <main>                       
            <MovieDB />                          
        </main>

        <br/>
        <br/>
            <Footer />
        
    </div>
  );
}


export default App;
