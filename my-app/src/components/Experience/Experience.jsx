import React from 'react';
import {BsPatchCheckFill} from "react-icons/bs"
import {SiHtml5,SiJavascript,SiRedux,SiTypescript,SiMongodb,SiExpressvpn} from "react-icons/si"
import {IoLogoCss3} from "react-icons/io"
import {FaReact} from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import "./Experience.css"
function Experience(props) {
    return (
        <section id='Experience'>
            {/* <h5>What Skills I Have</h5> */}
            <h2>My Skills</h2>
            <div className='container experience_container'>
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                             {/* <img width={10} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" /> */}
                            {/* <h4>HTML</h4> */}
                             <SiHtml5 size={70} color="FF5733" />
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>

                            {/* <h4>CSS</h4> */}
                            <IoLogoCss3 size={70} color="blue" />
                            {/* <small className='text-light'>Intermediate</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>

                            {/* <h4>JAVASCRIPT</h4> */}
                            <SiJavascript size={70} color="yellow"/>
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                  
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>

                            {/* <h4>REACT JS</h4> */}
                            <FaReact size={70} color="#1a27f2"/>
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <SiRedux size={70} color="violet" />

                            {/* <h4> ADVANCED REACT JS</h4> */}
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <SiTypescript size={70} color="blue" />

                            {/* <h4> ADVANCED REACT JS</h4> */}
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>

                            {/* <h4>Node JS</h4> */}
                            <DiNodejs size={90} color="green" />
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill  className='experience_details-icon'/>
                            <div>

                            {/* <h4>MongoDB</h4> */}
                            <SiMongodb size={90} color="green" />
                            {/* <small className='text-light'>Intermediate</small> */}
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>

                            {/* <h4>EXPRESS</h4> */}
                            <SiExpressvpn size={70} color="yellow" />
                            {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        
                    </div>
                </div>
                
            </div>

        </section>
    );
}

export default Experience;