import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import TransitionStyles from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`
 ${variables};

 html{
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
 }

 *,
 *:before,
 *:after {
   box-sizing: inherit;
 }

 body {
    width: 100%;
    background-color: var(--dark-gray);
    font-family: var(--font-sans);
    line-height: 1.3;
    counter-reset: section;
    font-size: var(--font-xl);
    @media (max-width: 480px) {
        font-size: var(--font-lg);
    }
}

h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: var(--light-tan);
    line-height: 1.1;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
}

p {
    margin: 0px 0px 15px;
    color: var(--white);
}

section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
    
    @media (max-width: 768px) {
        padding: 80px 0px;
    }
    @media (max-width: 480px) {
        padding: 60px 0px;
    }
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &.fillHeight {
        padding: 0 150px;
        @media (max-width: 1080px) {
          padding: 0 100px;
        }
        @media (max-width: 768px) {
          padding: 0 50px;
        }
        @media (max-width: 480px) {
          padding: 0 25px;
        }
      }
}


${TransitionStyles}
 
`;

export default GlobalStyle;