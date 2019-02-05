import * as React from 'react';
import classnames from 'classnames';

// @ts-ignore no .d.ts file
import {MDCSliderFoundation, MDCSliderAdapter} from '@material/slider/dist/mdc.slider';

export interface SliderProps {
  className?: string
}

interface SliderState {
  classList: Set<string>
}

class Slider extends React.Component<SliderProps, SliderState> {
  foundation: MDCSliderFoundation;
  state: SliderState = {classList: new Set()};

  get adapter(): Partial<MDCSliderAdapter> {
    return {
      hasClass: (className: string) {

      },
      addClass: (className: string) {

      },
      removeClass: (className: string) {

      },
      getAttribute: (name: string) {

      },
      setAttribute: (name: string, value: number | string) {

      },
      removeAttribute: (name: string) {

      },
      computeBoundingRect: (): ClientRect => {
        return {
          bottom: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          width: 0
        }
      },
      getTabIndex: (): number => {
        return 0
      },
      /** registerInteractionHandler
       * root: mousedown, touchstart
       *  */
      /** registerThumbContainerInteractionHandler
       * SliderThumbContainer: mousedown, touchstart
       */
      registerBodyInteractionHandler: (type: string, handler: () => void) => {
        
      },
      deregisterBodyInteractionHandler: (type: string, handler: () => void) => {

      },
      registerResizeHandler: (handler: () => void) => {

      },
      deregisterResizeHandler: (handler: () => void) => {

      },
      notifyInput: () => {

      },
      notifyChange: () => {

      },
      setThumbContainerStyleProperty: (propertyName: string, value: string | number) => {

      },
      setTrackStyleProperty: (propertyName: string, value: string | number) => {

      },
      setMarkerValue: (value: number) => {

      },
      appendTrackerMarkers: (numMarkers: number) => {

      },
      removeTrackMarkers: () => {

      },
      setLastTrackMarkersStyleProperty: (propertyName: string, value: string | number) => {

      },
      isRTL() {

      }
    };
  }
  get classes() {
    return {}
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  componentDidUpdate(prevProps: SliderProps) {

  }
  destroy() {

  }
  setTrackerMarker = () => {

  }
  layout = () => {

  }
  getValue = (): number => {
    return 0;
  }
  setValue = (value: number) => {

  }
  getMax = (): number => {
    return 0;
  }
  setMax = (max: number) => {

  }
  getMin = (): number => {
    return 0;
  }
  setMin = (min: number) => {

  }
  getStep = (): number => {
    return 0;
  }
  setStep = (step: number) => {

  }
  isDisabled = (): boolean => {
    return false;
  }
  setDisabled = (disabled: boolean) => {

  }
  render() {
    return (
      <div>MDC Slider</div>
    )
  }
}

export default Slider;