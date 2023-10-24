import { css } from "styled-components";

const variables = css`
    :root {
      --light-turquoise: #00fff5;
      --turquoise: #29d9d5;
      --dark-turquoise: #00ad85;
      --darkest: #17252A;
      --dark-gray: #222831;
      --dark-gray-shadow: rgba(34, 40, 49, 0.7);
      --gray: #393e46;
      --lightest-teal: #DEF2F1;
      --tan: #dfd8cb;
      --light-tan: #f5f3ea;
      --turquoise-tint: rgba(41, 217, 213 ,0.3);
      --white: #E6f1ff;  

      --font-sans : 'Calibre', 'Inter', 'Poppins', sans-serif;
      --font-mono : 'SF Mono', 'Source Code Pro', monospace;

      --font-xxs: 12px;
      --font-xs: 13px;
      --font-sm: 14px;
      --font-md: 16px;
      --font-lg: 18px;
      --font-xl: 20px;
      --font-xxl: 22px;
      --font-heading: 32px;

      --border-radius: 4px;
      --nav-height: 100px;
      --nav-scroll-height : 70px;

      --tab-height: 42px;
      --tab-width: 120px;
      --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
      --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      --hamburger-width: 30px;
      --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
      --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
      --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      --ham-after-active: bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    }
`;

export default variables;