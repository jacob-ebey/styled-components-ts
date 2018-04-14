import * as React from 'react'
import styledComponents from 'styled-components'
import styledComponentsTs from '../src/styled-components-ts'

// Imagine the ThirdParty component below is from a library that accepts a className to extend
// it's styling (standard react pattern)
export interface IThirdPartyProps {
  label: string
  className?: string
}

export const ThirdParty = ({ label, className }: IThirdPartyProps) => (
  <h1 className={`class-from-lib ${className || ''}`}>{ label }</h1>
)

export interface IExtendedThirdPartyProps {
  hasError?: boolean
}

// Your code to add styling would be the following
export const StyledThirdParty = styledComponentsTs<IExtendedThirdPartyProps>(styledComponents(ThirdParty))`
  color: ${props => props.hasError ? 'red' : 'blue'};
`
