import React, {Component} from 'react'

const buscador = {
        margin: '50px',
        textAlign: 'center'
}

class BuscadorTarjetas extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterBy: ''
        }
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event) {
        this.setState({filterBy: event.target.value}, () => {
          this.props.filtrar(this.state.filterBy);  
        })
        
    }
    render(){
        return( 
            <div style={buscador}>
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                <label>Peli:</label>
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.filterBy} />
                <input type="submit" value="Submit" />  
                </form>
            </div>
        )
    }
} 

export default BuscadorTarjetas;