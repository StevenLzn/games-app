"use client";

import { styled } from "styled-components";

// TODO: Ajustar la sombra para que sea agradable a la vista
export const GameCardBox = styled.div`
  align-items: center;
  background: #37363f;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 25%) 1px 3px 5px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 175px;
  justify-content: space-between;
  margin: 0.75rem;
  padding: 0.75rem 0.75rem 0 0.75rem;
  width: 120px;
`;

export const GameCardContainer = styled.div`
  align-items: center;
  background: black;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 175px;
  justify-content: space-between;
  padding: 0.2rem;
  width: 120px;
`;
