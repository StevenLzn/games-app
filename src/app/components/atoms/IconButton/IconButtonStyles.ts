'use client'
import styled from 'styled-components';
import { ButtonProps } from './IconButton';

export const IconButtonContainer = styled.button<ButtonProps>`
    background: ${props => props.primary ? "#343541" : "#ebedf3"};
    transition: background 150ms cubic-bezier(0.2, -0.11, 0.45, 1.03) 0ms;
    border-radius: 10px;
    border: 1px solid #ebedf3;
    color: ${props => props.primary ? "#ebedf3" : "#343541"};
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    svg {
        width: 20px;
        height: 20px;
    }
    &:hover {
        background: #ced7f3ab;
    }
`;