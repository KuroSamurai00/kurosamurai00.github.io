import  useScrollDirection  from '../hooks/useScrollDirection.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; 
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(34, 40, 49, 0.85);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);
      
    
    @media (max-width: 1080px) {
        padding: 0px 40px;
    }
    @media (max-width: 768px) {
        padding: 0px 25px;
    }
    @media (max-width: 486px) {
        width: 83%;
    }

    @media (prefers-reduced-motion: no-preference) {
        ${props =>
        props.scrollDirection === 'up' &&
          !props.scrolledToTop &&
          css`
            height: var(--nav-scroll-height);
            transform: translateY(0px);
            background-color: rgba(34, 40, 49, 0.85);
            box-shadow: 0 10px 30px -10px var(--dark-gray-shadow);
          `};

        ${props =>
        props.scrollDirection === 'down' &&
          !props.scrolledToTop &&
          css`
            height: var(--nav-scroll-height);
            transform: translateY(calc(var(--nav-scroll-height) * -1));
            box-shadow: 0 10px 30px -10px var(--dark-gray-shadow);
          `};
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;   
    position: relative;
    width: 100%;
    color: var(--white);
   font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;  

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: var(--turquoise);
          width: 42px;
          height: 42px;

          &:hover,
          &:focus {
            svg {
              fill: var(--turquoise-tint);
            }
          }

          svg {
            fill: none;
            transition: var(--transition);
            user-select: none;
          }
        }
    }
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
    display: none;
    }
ol {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        margin: 0 5px;
        position: relative;
        counter-increment: item 1;
        font-size: var(--font-xs);

        a {
            padding: 10px;

            &:before {
                content: '0' counter(item) '.';
                margin-right: 5px;
                color: var(--turquoise);
                font-size: var(--font-xxs);
                text-align: right;
            }
        }
    }
}
    .resume-button {
      color: var(--turquoise);
      background-color: transparent;
      border: 1px solid var(--turquoise);
      border-radius: var(--border-radius);
      padding: 12px 16px;
      font-family: var(--font-mono);
      line-height: 1;
      text-decoration: none;
      font-size: var(--font-xs);
    
    }
    .resume-button:hover {
      background-color: rgba(41, 217, 213, 0.3);
    }
`;

export const NavBar = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
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

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    
    const sections = ['About', 'Experience', 'Projects', 'Contact'];

    const navLinks = sections.map(section => {
        return (               
            
                <li key={section.toString()}><a href={'#' + section}>{section}</a></li>
                                        
        )
    });
    
    return (
        <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                <div className="logo">MJ</div>
                <StyledLinks>
                    <ol>
                        {navLinks}
                    </ol>
                    <div>
            <a className="resume-button" target="_blank" rel="noopener noreferrer" href="/" role="button"> Resume</a>
          </div>
                </StyledLinks>
            </StyledNav>
        </Header>

    )

}