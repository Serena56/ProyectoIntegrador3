import React from 'react'

const Footer = () => {
    
        return(
            <div>
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
            </div>
        )
}

export default Footer;