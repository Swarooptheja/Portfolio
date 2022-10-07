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
            <h1>Hello I'm</h1>
            <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Theja Swaroop",
                    2000,
                    "Full Stack Web Developer",
                    2000,
                ]}
            />

            </h1>
            {/* <h5 className="text-light">Fullstack developer</h5> */}
           
            <Cta/>
            <Headerssocial/>
            <div className='me'>
                <img src={Me} alt="" />
            </div>
            {/* <a href="#contact" className='scroll_down'>Scrool Down</a> */}
        </div>
       </header>
    );
}

export default Header;