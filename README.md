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
// Import styled and styledComponentWithProps
import styled from 'styled-components';
import styledComponentWithProps from 'styled-components-ts';

// Create an interface for the component
export interface MyLabelProps {
  bold?: boolean;
}

// Create a styled component with our props interface
const MyLabel = styledComponentWithProps<MyLabelProps>(styled.p)`
  font-size: 14px;
  font-weight: ${props => props.bold ? '600' : 'unset'};
`;

export default MyLabel;

```

Now we have all the typescript goodies for MyLabel like type checking and auto-complete for MyLabel.
```jsx
import MyLabel from './MyLabel';

<MyLabel bold>Hello, World</MyLabel>
```

For more information please see https://github.com/styled-components/styled-components