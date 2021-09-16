import React from 'react'
import './NavigBar.css';


const NavigBar = () => {

        return(
            <header className="Navbar">
                <nav>
                <img className='logo' src="/popcorn.svg"/>
                <h4>PelisPedia</h4>
                </nav> 
                <nav>
                    <ul className='nav_links'>
                        <li><a href="#" className="hipervinculo">Top Rated</a></li>
                        <li><a href="#" className="hipervinculo">Popular</a></li>
                        <li><a href="#" className="hipervinculo">About</a></li>
                    </ul>
                </nav>
            </header>
        )

}

export default NavigBar