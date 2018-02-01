// Import react, styledComponents and styledComponentWithProps
import * as React from 'react';
import styledComponents from 'styled-components';
import styledComponentsTs from '../src/styled-components-ts';

// Create an interface for the component
export interface MyImageProps {
  size: number;
  borderColor?: string;
  borderSize?: number;
}

// Create a styled component with our props interface
const MyImage = styledComponentsTs<MyImageProps>(styledComponents.img) `
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => props.borderSize || '4px'} solid ${props => props.borderColor || 'black'}
`;

export default MyImage;
