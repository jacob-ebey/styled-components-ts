import * as React from 'react';
import styledComponents from 'styled-components';
import dist from '../dist';

interface MyImageProps {
  size: number;
}

const MyImage = dist<MyImageProps>(styledComponents.img) `
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const ImageInstance = <MyImage size={200} />;
