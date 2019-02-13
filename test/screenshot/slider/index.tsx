import * as React from 'react';
import '../../../packages/slider/index.scss';

import Slider from '../../../packages/slider/index';

class SliderScreenShotTests extends React.Component<{}, {valueNow: number}> {
  state = {valueNow: 0};

  render() {
    return (
      <Slider valueMin={0} valueMax={10} valueNow={this.state.valueNow}
        notifyInput={(valueNow) => this.setState({valueNow})}/>
    );
  }
};

export default SliderScreenShotTests;
