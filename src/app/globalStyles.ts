"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    background: #f1f6f954;
    height: 100%;
    padding: 0;
    margin: 0;
}

html {
    margin: 0.5rem 0 0.25rem 0;
}

main {
    margin-bottom: 2rem;
    margin-top: 2rem;
}
`;
