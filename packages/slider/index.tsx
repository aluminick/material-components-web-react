import * as React from 'react';
import classnames from 'classnames';

// @ts-ignore no .d.ts file
import {MDCSliderFoundation, MDCSliderAdapter, strings} from '@material/slider/dist/mdc.slider';

/* eslint-disable no-unused-vars */

import SliderTrackMarker from './SliderTrackMarker';
/* import SliderTrackMarkerContainer from './SliderTrackMarkerContainer'; */
/* eslint-enable no-unused-vars */

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any,
  className?: string,
  notifyInput?: (value: number) => void,
  notifyChange?: (value: number) => void,
  valueMin: number,
  valueMax: number,
  valueNow: number,
  disabled?: boolean,
  step?: number,
  tabIndex?: number,
  dir?: 'ltr' | 'rtl' | 'auto'
}

/* interface SliderAttributes extends React.HTMLAttributes<HTMLDivElement> {
  'aria-valuenow': number,
  'aria-valuemin': number,
  'aria-valuemax': number,
  'aria-label': string,
  'aria-disabled': boolean | undefined,
  'data-step': number | undefined,
} */

interface SliderState {
  classList: Set<string>,
  /* sliderAttributes: SliderAttributes, */
  sliderThumbStyle: React.CSSProperties,
  sliderTrackStyle: React.CSSProperties,
  sliderLastTrackMarkerStyle: React.CSSProperties,
  markerValue: number
}

class Slider extends React.Component<SliderProps, SliderState> {

  foundation: MDCSliderFoundation;
  sliderElement: React.RefObject<HTMLDivElement> = React.createRef();
  thumbContainerElement: React.RefObject<HTMLDivElement> = React.createRef();

  sliderBoundingClientRect: ClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
  }
  markerArray: Array<React.ReactElement<HTMLDivElement>> = [];

  static defaultProps: Partial<SliderProps> = {
    step: 0,
    disabled: false,
    tabIndex: 0
  };

  state: SliderState = {
    classList: new Set(),
    /* sliderAttributes: {
      'aria-valuemin': this.props["aria-valuemin"],
      'aria-valuemax': this.props["aria-valuemax"],
      'aria-valuenow': this.props["aria-valuenow"],
      'aria-label': this.props["aria-label"],
      'aria-disabled': this.props["aria-disabled"],
      'data-step': this.props.step,
      'tabIndex': this.props.tabIndex
    }, */
    sliderThumbStyle: {},
    sliderTrackStyle: {},
    sliderLastTrackMarkerStyle: {},
    markerValue: 0
  };

  get adapter(): Partial<MDCSliderAdapter> {
    return {
      hasClass: (className: string) => this.classes.split(' ').includes(className),
      addClass: (className: string) => {
        const {classList} = this.state;
        classList.add(className);
        this.setState({classList});
      },
      removeClass: (className: string) => {
        const {classList} = this.state;
        classList.delete(className);
        this.setState({classList});
      },
      getAttribute: (name: string): string | null => {
        const attributeValue = this.props[name];
        return (attributeValue === undefined)? null: String(attributeValue);
      },
      /* setAttribute: (name: string, value: number | string): void => {
        const attributeName = name;
        const newAttributes = Object.assign({}, this.state.sliderAttributes, {[attributeName]: value})
        this.setState({sliderAttributes: newAttributes});
      },
      removeAttribute: (name: string): void => {
        const attributeName = name;
        const newAttributes = Object.assign({}, this.state.sliderAttributes, {[attributeName]: undefined})
        this.setState({sliderAttributes: newAttributes});
      }, */
      computeBoundingRect: (): ClientRect => {
        return this.sliderElement.current!.getBoundingClientRect();
      },
      getTabIndex: (): number | undefined => {
        return this.props.tabIndex;
      },
      registerInteractionHandler: (type: string, handler: () => void): void => {
        this.sliderElement.current!.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type: string, handler: () => void): void => {
        this.sliderElement.current!.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type: string, handler: () => void): void => {
        this.thumbContainerElement.current!.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type: string, handler: () => void): void => {
        this.thumbContainerElement.current!.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type: string, handler: () => void) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type: string, handler: () => void) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: (handler: () => void) => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: (handler: () => void) => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.props.notifyInput && this.props.notifyInput(this.getValue());
      },
      notifyChange: () => {
        this.props.notifyChange && this.props.notifyChange(this.getValue());
      },
      setThumbContainerStyleProperty: (propertyName: string, value: string | number) => {
        const {sliderThumbStyle} = this.state;
        const updatedSliderThumbStyle = Object.assign({}, sliderThumbStyle, {[propertyName]: value});
        this.setState({sliderThumbStyle: updatedSliderThumbStyle});
      },
      setTrackStyleProperty: (propertyName: string, value: string | number) => {
        const {sliderTrackStyle} = this.state;
        const updatedSliderTrackStyle = Object.assign({}, sliderTrackStyle, {[propertyName]: value});
        this.setState({sliderTrackStyle: updatedSliderTrackStyle});
      },
      setMarkerValue: (value: number) => {
        this.setState({markerValue: value});
      },
      appendTrackMarkers: (numMarkers: number) => {
        for (let i = 0; i < numMarkers; i++) {
          this.markerArray.push(<SliderTrackMarker />);
        }
      },
      removeTrackMarkers: () => {
        this.markerArray = [];
      },
      setLastTrackMarkersStyleProperty: (propertyName: string, value: string | number) => {
        const {sliderLastTrackMarkerStyle} = this.state;
        const updateSliderLastTrackMarkerStyle = Object.assign({}, sliderLastTrackMarkerStyle, {[propertyName]: value});
        this.setState({sliderLastTrackMarkerStyle: updateSliderLastTrackMarkerStyle});
      },
      isRTL: (): boolean => {
        return this.props.dir === 'rtl';
      }
    };
  }
  get classes(): string {
    const {classList} = this.state;
    const {className} = this.props;
    return classnames('mdc-slider', Array.from(classList), className);
  }
  componentDidMount() {
    this.foundation = new MDCSliderFoundation(this.adapter);
    this.foundation.init();
    this.setValue(this.props.valueNow);
    this.setMax(this.props.valueMax);
    this.setMin(this.props.valueMin);
    this.setStep(this.props.step!);
    this.setDisabled(this.props.disabled!);
  }
  componentWillUnmount() {
    this.foundation.destroy();
  }
  componentDidUpdate(/* prevProps: SliderProps */) {
    
  }
  getValue = (): number => {
    return this.foundation.getValue();
  }
  setValue = (value: number) => {
    this.foundation.setValue(value);
  }
  getMax = (): number => {
    return this.foundation.getMax();
  }
  setMax = (max: number) => {
    this.foundation.setMax(max);
  }
  getMin = (): number => {
    return this.foundation.getMin();
  }
  setMin = (min: number) => {
    this.foundation.setMin(min);
  }
  getStep = (): number => {
    return this.foundation.getStep();
  }
  setStep = (step: number) => {
    this.foundation.setStep(step);
  }
  isDisabled = (): boolean => {
    return this.foundation.isDisabled();
  }
  setDisabled = (disabled: boolean) => {
    this.foundation.setDisabled(disabled);
  }
  render() {
    const {
      children,
      className,
      notifyInput,
      notifyChange,
      disabled,
      step,
      tabIndex,
      valueNow,
      valueMin,
      valueMax,
      taxIndex,
      ...otherProps
    } = this.props;
    /* const {sliderAttributes} = this.state; */
    return (
      <div className={this.classes} tabIndex={tabIndex} aria-valuenow={valueNow} aria-valuemin={valueMin} aria-valuemax={valueMax} ref={this.sliderElement} role="slider" /* {...sliderAttributes} */ {...otherProps} aria-disabled={disabled}>
        <div className="mdc-slider__track-container">
          <div style={this.state.sliderTrackStyle} className="mdc-slider__track"></div>
        </div>
        <div ref={this.thumbContainerElement} style={this.state.sliderThumbStyle} className="mdc-slider__thumb-container">
          <svg className="mdc-slider__thumb" width={21} height={21}>
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring"></div>
        </div>
      </div>
    )
  }
}

export default Slider;