import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.jpg"
import Common from "./Common";



const Home = () => {
  return (
    <>
     <Common name='Grow Your Business With Us' imgsrc={web} visit='/service' btname="Get Started"  />
     <div className="text-center my-4 h-35">
     <p style={{color:"red"}}> We are growing in the terms of development </p>
     </div>
    </>
  );
}

export default Home;
