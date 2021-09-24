import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className='footer-container'>
      <section className='footer-message'>
        <p className='footer-message-heading'>
          Please feel free to send a message for any reason!
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Type Here..'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div> */}
      </section>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-hat-wizard' />
              &nbsp;Alex Corpuz
            </Link>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link Github'
              href='https://github.com/alcorpuz'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link Linkedin'
              href='https://www.linkedin.com/in/alexander-corpuz-90301b219/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;