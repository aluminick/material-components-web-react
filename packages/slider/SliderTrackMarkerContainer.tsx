import * as React from 'react';

export interface SliderTrackMarkerContainerProps {
  children: React.ReactNode
}

const SliderTrackMarkerContainer: React.FunctionComponent<SliderTrackMarkerContainerProps> = ({children}) => (
  <div className="mdc-slider__track-marker-container">{children}</div>
)

export default SliderTrackMarkerContainer;