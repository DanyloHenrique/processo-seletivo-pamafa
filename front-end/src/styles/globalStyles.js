import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #203E88;
        --color-background: #EAEAEA;
        --color-white: #FFFFFF;
        --color-text: #2A2A2A;
        --color-text-gray: #656565;
        --color-text-light: #C9C9C9;

        --breakpoint-mobile: 360px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    a:focus-visible{
        outline: 2px dashed var(--color-text);
        outline-offset: 4px; /* Creates a 4px gap between the link and the outline */
    }

    ol, ul {
	    list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
    }
    
    html{
        height: 100%;
    }

    html,
    body {
    max-width: 100vw;
    overflow-x: hidden;
    }

    body{
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-background);
        font-family: var(--font-montserrat), Arial, sans-serif;
    }
`