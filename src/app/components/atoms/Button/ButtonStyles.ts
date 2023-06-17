"use client";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #dae0f1;
  border: none;
  border-radius: 8px;
  color: #343541;
  cursor: pointer;
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: bold;
  padding: 0.75rem 1rem;
  transition: background 150ms cubic-bezier(0.2, -0.11, 0.45, 1.03) 0ms;
  &:hover {
    background: #ced7f3ab;
  }
`;
