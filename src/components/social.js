import React from "react";
import styled, { css } from "styled-components";
import { socialMedia } from "../config";

import { Icon } from "../components/icons/";

const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #ccd6f6;
        color: #a8b2d1;
    }

    li {
        &:last-of-type {
            margin-bottom: 20px;
        }
        a {
            padding: 10px;
        
            &:hover {
            color: var(--turquoise);
            }
            &:focus {
                transform: translateY(-3px);
            }
            svg {
                width: 20px;
                height: 20px;
              }
        }
    }
    
`;

export const Social = () => {
    return (
        <div className="social-side">
            <StyledSocialList>
                {socialMedia.map(({ url, name }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} target="_blank" rel="norefferrer">
                            <Icon name={name}/>
                        </a>
                    </li>
                ))}
            </StyledSocialList>
            {/* <ul className="social-list">
            <li><a href="https://github.com/j3lacksamurai"><i className="fa-brands fa-github" ></i></a></li>
            <li><a href="https://www.linkedin.com/in/erica-payne-553b331b5/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="mailto:johnson.matthew.domi@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
            </ul> */}
        </div>
    )
}