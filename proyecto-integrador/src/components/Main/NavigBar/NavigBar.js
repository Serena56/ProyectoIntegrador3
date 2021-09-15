import React from 'react'
import './NavigBar.css';


const NavigBar = () => {

        return(
            <header className="Navbar">
            
               <img className='logo' src="/popcorn.svg"/>
                <h4>PelisPedia</h4> 
           
            
                <nav>
                    <ul className='nav_links'>
                        <li><a href="#">Top Rated</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        )

}

export default NavigBar