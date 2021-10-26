import React from 'react'
import pizza from '../img/pizza.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                <div className="col-6 p-25">
                <h3>About Us</h3>
                <h1>WELCOME TO MAESTRO PIZZANI</h1>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda sint, maiores doloremque optio obcaecati id nulla et in aliquam.
                </p>
                <div className="about-btn">
                     <a href="" className="btn btn-smart">Read More</a>
                </div>
                </div>
                <div className="col-6">
                 <div className="about-img">
                <img src={pizza} alt="pizza"/>
                 </div>
                </div>
                </div>
             
          

            </div>
        </div>
    )
}

export default About
