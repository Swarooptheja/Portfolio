import React from 'react';
import { FaFacebookSquare,FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa';
import Typical from "react-typical"
function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href="#">
                            <FaFacebookSquare/>
                        </a>
                        <a href="#">
                        <FaLinkedin/>
                    
                        </a>
                        <a href="https://github.com/Swarooptheja">
                            <FaGithub/>
                        </a>
                        <a href="#">
                            <FaInstagramSquare/>
                        </a>
                        </div>
                       
                    </div>
                
                <div className="profile-details-name">
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Thejaswaroop</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {/* {" "} */}
                        <h1>
                            {/* {" "} */}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Bandi theja swaroop",
                                1000,
                                "Full stack web developer",
                                1000,
                                "Mern stack developer",
                                1000,
                                
                            ]}
                            />

                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <button className='btn primary-btn'>
                        {" "}
                        Hire me {" "}
                    </button>
                    <a href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="thejaswaroop.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
            </div>
            
        </div>
    );
}

export default Profile;