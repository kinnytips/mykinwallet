import styled, { css } from 'styled-components';
import { transactionFormBottomMargins } from './../../style/theme/generalVariables';

export const group = styled.div`
	position: relative;
`;

export const formLabel = styled.label`
	font-size: 14px;
	letter-spacing: 0.3px;
	color: ${props => props.inputColor};
	position: absolute;
	pointer-events: none;
	top: 11px;
	left: 15px;
	transition: 0.2s ease all;
`;

export const subLabel = styled.div`
	font-weight: 600;
	font-style: italic;
	font-stretch: normal;
	line-height: 1.58;
	letter-spacing: 0.3px;
	margin-top: 4px;
`;

export const bottomLabel = styled.div`
	font-size: 12px;
	font-style: italic;
	line-height: 1.58;
	letter-spacing: 0.3px;
	margin-top: -25px;
`;

export const input = styled.input`
  background-color: ${({ inputBackgroundColor }) => inputBackgroundColor};
	border: 1px solid ${props => props.borderColor};
	border-radius: 2px;
  color: ${props => props.inputColor};
	letter-spacing: 0.4px;
	margin-bottom: ${({ name }) => (transactionFormBottomMargins[name] ? transactionFormBottomMargins[name] : '34px')};
	font-size: 16px;
	height: 42px;
	width: 100%;
	padding-left: 12px;
	font-family: primaryFont;

  ${({ disabled, inputDisabledColor, inputDisabledBackgroundColor }) =>
		disabled &&
		css`
			background: ${inputDisabledBackgroundColor};
			color: ${inputDisabledColor};
			-webkit-text-fill-color: ${inputDisabledColor};
			-webkit-opacity: 1;
		`}

  & ~ ${formLabel} {
    ${({ name }) =>
			css`
				top: ${name === 'kinAmount' ? '-39px' : '-21px'};
				left: 1px;
				font-size: 12px;

				@media (max-width: 768px) {
					top: ${name === 'kinAmount' ? '-33px' : '-14px'};
					font-size: 11px;
					line-height: 1;
					letter-spacing: 0.8px;
				}
			`}

  &:focus {
    outline: none;
    border-color: ${props => props.outLineFocusColor};
		background: ${({ inputValueBackgroundColor }) => inputValueBackgroundColor};
  }

  &::placeholder {
		color: ${props => props.placeholderColor};
		font-size: 16px;
		letter-spacing: 0.4px;
  }

  &::-webkit-input-placeholder  {
    padding-top: 5px;
	}

	::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
	}
`;

export const errorMsg = styled.div`
	font-size: 12px;
	font-style: ${({ errorFontStyle }) => errorFontStyle};
	font-weight: ${({ errorFontWeight }) => errorFontWeight};
	line-height: 1.83;
	letter-spacing: 0.6px;
	color: ${props => props.errorColor};
	margin-top: -27px;
	margin-bottom: 21px;
	overflow: hidden;
`;
