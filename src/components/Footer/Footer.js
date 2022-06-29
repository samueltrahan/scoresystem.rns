import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="samuel">
                <h5>&copy; 2022 by Samuel Trahan</h5>
            </div>            
            <div className="social-links">
                <a className="links" href="https://github.com/samueltrahan" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
                <a className="links" href="https://twitter.com/samueltrahan4" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                <a className="links" href="https://github.com/samueltrahan" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
    )
}
