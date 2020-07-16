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
        font-family: 'Fira Sans', sans-serif;
        color: white;
        
    }

    a {
  text-decoration: none;
}

li {
list-style-type: none
}

/* Scrollbar mod */

/* width */
::-webkit-scrollbar {
	width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: rgb(255, 237, 158);
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: rgb(255, 189, 8);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: rgb(155, 114, 0);
}
`;

export default GlobalStyle;
