'use client';
import styled from "styled-components";

export const GameMenuContainer = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem auto 0.5rem auto;
    width: 50%;
    @media (max-width: 650px) {
        width: 100%;
        justify-content: space-around;
    }
`;