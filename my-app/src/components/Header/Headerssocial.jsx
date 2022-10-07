import React from 'react';
import "./Header.css"
import { FaFacebookSquare,FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa';
function Headerssocial(props) {
    return (
        <div className='header_socials'>
            <a href="https://facebook.com" target="_blank">
                            <FaFacebookSquare/>
                        </a>
                        <a href="https://linkdin.com" target="_blank">
                        <FaLinkedin/>
                    
                        </a>
                        <a href="https://github.com/Swarooptheja" target="_blank">
                            <FaGithub/>
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <FaInstagramSquare/>
                        </a>
            
        </div>
    );
}

export default Headerssocial;