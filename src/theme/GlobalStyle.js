import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

    }
    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        color: white;
        
    }

    a {
  text-decoration: none;
}

/* Scrollbar mod */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffed9e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffbd08;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9b7200;
}
`;

export default GlobalStyle;
