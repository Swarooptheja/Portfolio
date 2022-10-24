import React from 'react';
import Cta from './Cta';
import Headerssocial from './Headerssocial';
import "./Header.css"
import Me from "../../components/Images/profile.jpg"
import Typical from "react-typical"
function Header(props) {
    return (
       <header>
        <div className="container header_container">
            <h2>Hello I'm</h2>
            <h2>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Theja Swaroop",
                    3000,
                    "Full Stack Web Developer",
                    3000,
                ]}
            />

            </h2>
            <Cta/>
            <Headerssocial/>
            {/* <h5 className="text-light">Fullstack developer</h5> */}
           
            {/* <div className='me'>
                <img src={Me} alt="" />
            </div> */}
            {/* <a href="#contact" className='scroll_down'>Scrool Down</a> */}
        </div>
       
       </header>
    );
}

export default Header;