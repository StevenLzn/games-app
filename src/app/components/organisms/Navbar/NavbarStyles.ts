"use client";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  padding: 0.5rem 0;
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
