"use client";
import styled from "styled-components";
import { SubtitleProps } from "./Subtitle";

export const SubtitleWrapper = styled.h2<SubtitleProps>`
  color: ${(props) => props.color};
  font-size: 18px;
  line-height: 22px;
  margin: 0.25rem 0;
  text-transform: uppercase;
`;
