import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export enum TestButtonTypesEnum {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

const ButtonUI = styled.button<IButtonProps>`
  padding: 8px;
  display: flex;
  background-color: #2bae66;
  color: #fcf6f5;
  outline: none;
  border: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: #259457;
  }

  &:active,
  &:focus {
    outline: 1px solid black;
  }

  ${({ buttontype }: { buttontype: TestButtonTypesEnum }) =>
    buttontype === TestButtonTypesEnum.Secondary &&
    css`
      background: #eed971;
      color: black;

      &:hover {
        background: #e8cc42;
      }
    `}
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttontype: TestButtonTypesEnum;
  children: React.ReactNode | string;
}

export const TestButton: React.FC<IButtonProps> = ({
  buttontype = TestButtonTypesEnum.Primary,
  children,
  ...props
}) => {
  return (
    <ButtonUI buttontype={buttontype} {...props}>
      {children}
    </ButtonUI>
  );
};
