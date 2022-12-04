import React from 'react'
import Footer from './Footer';
import './Heroimage.css';
import Aboutimg from './images/about.jpg';
import "./about.css"

const About = () => {
  return (
    <>
    <div className='about'>
    
        <img  className='aboutimg' src= {Aboutimg}  alt="About Image"/>
    
        <div className='aboutsec'>
      <h1><u>ABOUT US</u></h1>
      <p>Fitness Gym Institute was started on World Health Day on 7 th April 2006. It’s been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute. Fitness Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry.

Fitness Gym Institute is the only Advanced Personal Trainer program, which offers you low-cost tuition, fast test results and complete career development. Becoming a Fitness Gym Fitness Institute certified Advanced Personal trainer is your foundation for success. It offers you complete approach to fitness, wellness and business skills. Make an investment in yourself and become a Fitness Gym Institute certified personal trainer.</p>
</div>
    </div>
    <Footer/>
     </>
  )
}

export default About