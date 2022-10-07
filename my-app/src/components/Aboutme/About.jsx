import React from 'react';
import {FiAward,FiUsers} from "react-icons/fi"
import{FaRegFolder} from "react-icons/fa"
import Me from "../../components/Images/profile.jpg"
import "./About.css"
function About(props) {
    return (
        <section id='About'>
            <h5>Get to Know</h5>
            <h2>About Me!</h2>
           <div  className='container about_container'>
            <div className="about_me">
                <div className='about_me-image'>

                <img  src={Me} alt="aboutpageimage" />
                </div>

            </div>
            <div className="about_content">
                {/* <div className="about_cards">
                    <article className='about_card'>
                        <FiAward className='about_icon'/>
                        <h5>Experinence</h5>
                        <small>3yrs Experience</small>

                    </article>
                    <article className='about_card'>
                        <FiUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>3000 clients</small>

                    </article>
                    <article className='about_card'>
                        <FaRegFolder className='about_icon'/>
                        <h5>Projects</h5>
                        <small>100 Projects completed</small>

                    </article>
                </div> */}
                <h3>
                    Hi everyone, I'm Theja Swaroop and currently I'm learning Full Stack Web Development course at Masai School.<br/>
                    I've interested in development and passionate about learning new things at that time I got an opportunity to enroll in Masai School which is a 30-week course duration.  In Full Stack Web Development course, in which I can enhance my skills in front-end and back-end technologies.  Enthusiastic web developer with ability to learn.
                    
                </h3>
                <a style={{textDecoration:"none"}} href="#Contact" className='btn btn-primary'>Let's Talk</a>

            </div>
           </div>



            
        </section>
    );
}

export default About;