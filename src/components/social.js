import React from "react";
import { socialMedia } from "../config";

import { Icon } from "../components/icons/";

export const Social = () => {
  return (
    <div className="social-side">
      {/* <ul className="social-list">
                {socialMedia.map(({ url, name }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} target="_blank" rel="norefferrer">
                            <Icon name={name}/>
                        </a>
                    </li>
                ))}
            </ul> */}
      <ul className="social-list">
        <li>
          <a href="https://github.com/j3lacksamurai">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="mailto:johnson.matthew.domi@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
