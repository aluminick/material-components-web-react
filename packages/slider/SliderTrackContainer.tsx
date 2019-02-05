import * as React from 'react';

export interface SliderTrackContainerProps {
  children: React.ReactNode
}

const SliderTrackContainer: React.FunctionComponent<SliderTrackContainerProps> = ({children}) => (
  <div className="mdc-slider__track-container">
    {children}
  </div>
)

export default SliderTrackContainer;