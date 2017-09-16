<a href="https://www.styled-components.com">
  <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
</a>
<br />

Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress and the added benefits of TypeScript 💅

```
npm install --save styled-components-ts
```

## Getting Started

```typescript
// Import react, styledComponents and styledComponentWithProps
import * as React from 'react';
import styledComponents from 'styled-components';
import styledComponentWithProps from 'styled-components-ts';

// Create an interface for the component
export interface MyImageProps {
  size: number;
  borderColor?: string;
  borderSize?: number;
}

// Create a styled component with our props interface
const MyImage = styledComponentWithProps<MyImageProps>(styledComponents.img) `
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => props.borderSize || '4px'} solid ${props => props.borderColor || 'black'}
`;

export default MyImage;

```

Now we have all the typescript goodies for MyLabel like type checking and auto-complete for MyLabel.
```jsx
import MyImage from './MyImage';

<MyImage size={300} borderColor="blue" borderSize={10} />
```

We can also extend our components and add new props with ease.
```typescript
// Import react, styledComponents and styledComponentWithProps
import * as React from 'react';
import styledComponents from 'styled-components';
import styledComponentWithProps from 'styled-components-ts';

// Import our image and it's props
import MyImage, { MyImageProps } from './MyImage';

// Create an interface for the component that extends the base image props
export interface ExpandedImageProps extends MyImageProps {
  backgroundColor?: string;
}

// Create a styled component with our props interface that extends MyImage
const ExpandedImage = dist<ExpandedImageProps>(MyImage.extend)`
  background-color: ${props => props.backgroundColor || 'unset'};
`;

export default ExpandedImage;
```

For more information please see https://github.com/styled-components/styled-components