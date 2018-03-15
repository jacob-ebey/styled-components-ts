// Import react, styledComponents and styledComponentWithProps
import * as React from 'react';
import styledComponents from 'styled-components';
import styledComponentsTs from '../src/styled-components-ts';

// Import our image and it's props
import MyImage, { MyImageProps, MyThemeProps } from './MyImage';

// Create an interface for the component that extends the base image props
export interface ExpandedImageProps extends MyImageProps {
  backgroundColor?: string;
}

// Create a styled component with our props interface that extends MyImage
const ExpandedImage = styledComponentsTs<ExpandedImageProps>(MyImage.extend)`
  background-color: ${props => props.backgroundColor || 'unset'};
`;

// Create another styled component with theme interface
const ExpandedImageWithTheme = styledComponentsTs<ExpandedImageProps, MyThemeProps>(MyImage.extend)`
  background-color: ${props => props.backgroundColor || 'unset'};
  background: ${props => props.theme.primaryColor};
`;

export default ExpandedImage;
