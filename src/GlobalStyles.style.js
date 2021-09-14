import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body {
        background-color: #17223B;
        margin: 0;
        padding: 0;
        font-family: "Space Mono", monospace;
        /* font-family: 'Roboto Mono', monospace; */
    }
    ul {
        list-style-type: none;
    }
    a {
    text-decoration: none;
    }
`;
