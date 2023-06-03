'use client';
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ebedf3;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  width: ${props => props.style?.width};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  margin-right: 8px;
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: #999;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #999;
    width: 16px;
    height: 16px;
  }
`;