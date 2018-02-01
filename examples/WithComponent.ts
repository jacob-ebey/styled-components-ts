import styledComponents from 'styled-components';
import styledComponentsTs from '../src/styled-components-ts';

interface ButtonProps {
  color: string;
}

export const Button = styledComponentsTs<ButtonProps>(styledComponents.a)`
  border: none;
  background-color: ${props => props.color };
`;

interface BorderedButtonProps extends ButtonProps {
  borderColor: string;
}

export const BorderedButton = styledComponentsTs<BorderedButtonProps>(Button.extend)`
  border: 2px solid ${props => props.borderColor };
`;

export const ButtonLink = styledComponentsTs<BorderedButtonProps>
(BorderedButton.withComponent('a').extend)`
  border: 2px solid ${props => props.borderColor };
`;
