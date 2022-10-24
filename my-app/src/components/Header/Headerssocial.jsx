import React from 'react';
import "./Header.css"
import { FaFacebookSquare,FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa';
function Headerssocial(props) {
    return (
        <>
        {/* <h2 id='tag'>Follow Me On Social Media</h2> */}
        <div className='header_socials' >
                   
                        <a  href="https://www.linkedin.com/in/theja-swaroop-10a1a9197/" target="_blank">
                        <FaLinkedin  size={50}/>
                    
                        </a>
                        <a href="https://github.com/Swarooptheja" target="_blank">
                            <FaGithub  size={50}/>
                        </a>
                      
            
        </div>
        </>
    );
}

export default Headerssocial;