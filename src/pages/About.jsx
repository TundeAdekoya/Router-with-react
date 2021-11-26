import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id='about'>
            <h1>About AstroWeb</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum dolorem vitae fugiat beatae qui praesentium fuga architecto minima nesciunt!
            </p>
            <button onClick={() => navigate('/contact')} >
                Contact us Now
            </button>
        </div>
    )
}

export default About
