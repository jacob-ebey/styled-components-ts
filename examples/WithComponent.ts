import styledComponents from 'styled-components'
import styledComponentsTs from '../src/styled-components-ts'

interface IButtonProps {
  color: string
}

export const Button = styledComponentsTs<IButtonProps>(styledComponents.a)`
  border: none
  background-color: ${ props => props.color }
`

interface IBorderedButtonProps extends IButtonProps {
  borderColor: string
}

export const BorderedButton = styledComponentsTs<IBorderedButtonProps>(Button.extend)`
  border: 2px solid ${ props => props.borderColor }
`

export const ButtonLink = styledComponentsTs<IBorderedButtonProps>(
  BorderedButton.withComponent('a').extend)`
    border: 2px solid ${ props => props.borderColor }
`
