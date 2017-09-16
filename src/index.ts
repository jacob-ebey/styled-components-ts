import * as React from 'react';
import styledComponents, { StyledFunction } from 'styled-components';

const styledComponentWithProps =
  <TProps, U extends HTMLElement = HTMLElement>
    (
    styledFunction: StyledFunction<React.HTMLProps<U>>,
  ): StyledFunction<TProps & React.HTMLProps<U>> => {
    return styledFunction;
  };

export default styledComponentWithProps;
