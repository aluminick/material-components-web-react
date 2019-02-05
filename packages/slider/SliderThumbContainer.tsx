import * as React from 'react';

export interface SliderThumbContainerProps {
  children: React.ReactNode
}

const SliderThumbContainer: React.FunctionComponent<SliderThumbContainerProps> = ({children}) => (
  <div className="mdc-slider__thumb-container">
    {children}
  </div>
)

export default SliderThumbContainer;