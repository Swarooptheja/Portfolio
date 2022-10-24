import React, { useState } from 'react';
import "./Navbar.css"
import{AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import{BiBook} from "react-icons/bi"
import{RiServiceFill,RiMessage2Fill} from "react-icons/ri"
import{GrContact} from "react-icons/gr"

function Navbar(props) {
    let [activenav,setactivenav]=useState("#")
    return (
        
        <div id='nav' >
            <div id='cont'>
                <div id="main">
            {/* <div> */}

            <a style={{textDecoration:"none"}}  href="#" className={activenav==="#" ? "active":" "}>
                <AiOutlineHome className='navimages'/>Home
            </a>
            {/* </div> */}
            {/* <div> */}

            <a style={{textDecoration:"none"}}  href="#About" onClick={()=>setactivenav("#About")} className={activenav==="#About" ? "active":" "}>
                <AiOutlineUser className='navimages'/>About
            </a>
            {/* </div> */}
            {/* <div> */}

            <a style={{textDecoration:"none"}}  href="#Experience" onClick={()=>setactivenav("#Experience")} className={activenav==="#Experience" ? "active":" "}>
                <BiBook className='navimages'/>My Skills
            </a>
            {/* </div> */}
            {/* <div> */}

            <a style={{textDecoration:"none"}}  href="#portfolio" onClick={()=>setactivenav("#Portfolio")} className={activenav==="#Portfolio" ? "active":" "}>
                <RiServiceFill className='navimages'/>Projects
            </a>
            {/* </div> */}
            {/* <div> */}

            <a style={{textDecoration:"none"}}  href="#Contact" onClick={()=>setactivenav("#Contact")} className={activenav==="#Contact" ? "active":" "}>
                <RiMessage2Fill className='navimages'/> Contact Me
            </a>
            {/* </div> */}
                </div>

            </div>
            
        </div>
    );
}

export default Navbar;