import React from 'react';
import './Alex.css';


function Alex() {
    return (
      <div className='alex-container'>
        <div className='alex-leftPane'>
          <img src='alex_face.jpg' alt="Alex Corpuz"/>
          <div className='typewriter'>
            <span>Ready to code</span>
          </div>
        </div>
        <div className='alex-rightPane'>
          <p>Hello, my name is Alex Corpuz. I am a recent graduate from the University of California, Irvine (Summer, 2021).
              I have just received a Bachelor of Science degree in Computer Science while specializing in 'Information'. 
              I am currently looking for professional opportunities in software engineering. I'm excited to start working with a team of likeminded individuals 
              to create or work on something fascinating. I look forward to expanding my knowledge and experience life in industry. 
              Please feel free to email me at anytime in regards to job opportunities at&nbsp;
              <a href="mailto:alcorpuz@uci.edu" color='white'>alcorpuz@uci.edu</a>.
          </p>
          
        </div>
        
      </div>
    );
  }
  
  export default Alex;