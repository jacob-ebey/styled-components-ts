import * as React from 'react';
import styledComponents, { ThemedStyledFunction } from 'styled-components';

const styledComponentWithProps =
  <SProps, TProps extends object = any, U extends HTMLElement = HTMLElement>
    (
    styledFunction: ThemedStyledFunction<any, any>,
  ): ThemedStyledFunction<SProps & React.HTMLProps<U>, TProps> => {
    return styledFunction;
  };

export default styledComponentWithProps;
