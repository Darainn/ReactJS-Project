import React from 'react';
import { NavLink } from 'react-router-dom';
import about from "../src/images/about.jpg"
import Common from "./Common";


const About = () => {
  return (
    <>
     < Common name='Welcome To About Page' imgsrc={about} visit='/contact' btname="Contact Now" />
     <div style={{color : 'red'}} className="text-center h-25 my-3">
     <p>We are the team of developers who are eager to do something for the world of computer</p>
     </div>
    </>
  );
}

export default About;

