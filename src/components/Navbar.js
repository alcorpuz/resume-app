import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-hat-wizard"></i>
                        &nbsp;Alex
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                                UCI Relevant Courses
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {!button && <Button className='nav-links-mobile' buttonStyle='btn--outline' onClick={closeMobileMenu}>Download Resume</Button>}
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Download Resume</Button>}

                </div>

            </nav>
        </>
    );
}

export default Navbar;
