import * as React from 'react';
import styledComponents, { ThemedStyledFunction, StyledComponentClass } from 'styled-components';

const styledComponentWithProps =
  <TProps, U extends HTMLElement = HTMLElement>
    (
    styledFunction: ThemedStyledFunction<any, any>,
  ): ThemedStyledFunction<TProps & React.HTMLProps<U>, any> => {
    return styledFunction;
  };

export default styledComponentWithProps;
export { StyledComponentClass };
