import React from 'react';
import "./Header.css"
function Cta(props) {
    return (
        <div className='cta'>
            <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btn'>Download CV</a>
            <a style={{textDecoration:"none"}} href="#Contact" className='btn btn-primary'>Let's Talk</a>
            
        </div>
    );
}

export default Cta;