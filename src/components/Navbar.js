import  useScrollDirection  from '../hooks/useScrollDirection.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export const NavBar = () => {
    const [isMounted, setIsMounted] = useState();
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const prefersReducedMotion = usePrefersReducedMotion();
    const navDelay = 1000;
    const loaderDelay = 2000;

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
      };
    
      useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
    
        const timeout = setTimeout(() => {
          setIsMounted(true);
        }, 100);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          clearTimeout(timeout);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    const sections = ['About', 'Experience', 'Projects', 'Contact'];

    const navLinks = sections.map(section => {
        return (               
            
                <li key={section.toString()}><a href={'#' + section}>{section}</a></li>
                                        
        )
    });
    
    return (
        <header className='nav-header'>
            <nav className='nav-nav'>
                <div className="logo">MJ</div>
                <div className='side-nav'>
                    <ol>
                        {navLinks}
                    </ol>
                    <div>
            <a className="resume-button" target="_blank" rel="noopener noreferrer" href="/" role="button"> Resume</a>
          </div>
                </div>
            </nav>
        </header>

    )

}