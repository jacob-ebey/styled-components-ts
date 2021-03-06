// Import react, styledComponents and styledComponentWithProps
import * as React from 'react'
import styledComponents from 'styled-components'
import styledComponentsTs from '../src/styled-components-ts'

// Import our image and it's props
import MyImage, { IMyImageProps } from './MyImage'

// Create an interface for the component that extends the base image props
export interface IExpandedImageProps extends IMyImageProps {
  backgroundColor?: string
}

// Create a styled component with our props interface that extends MyImage
const ExpandedImage = styledComponentsTs<IExpandedImageProps>(MyImage.extend)`
  background-color: ${props => props.backgroundColor || 'unset'}
`

export default ExpandedImage
