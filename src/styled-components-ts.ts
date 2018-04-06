import * as React from 'react'
import { ThemedStyledFunction, StyledComponentClass } from 'styled-components'

const styledComponentWithProps =
  <SProps, TProps extends object = {}, U extends HTMLElement = HTMLElement>
    (
    styledFunction: ThemedStyledFunction<any, any>, // tslint:disable-line no-any
  ): ThemedStyledFunction<SProps & React.HTMLProps<U>, TProps> => {
    return styledFunction
  }

export { StyledComponentClass }
export default styledComponentWithProps
