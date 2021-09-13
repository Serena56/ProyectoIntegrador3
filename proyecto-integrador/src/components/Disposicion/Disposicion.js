import React, {Component} from 'react';
import "./Disposicion.css"



class Disposicion extends Component {


    cambiarDisposicion() {
//  alert("Me clickeaste");
        document.querySelector("body").style.backgroundColor = "Yellow"

    }
    
    render() {
    return(
    
        <button onClick={this.cambiarDisposicion}> CAMBIAR DISPOSICIÓN </button>
        
    )
  }

}


export default Disposicion;