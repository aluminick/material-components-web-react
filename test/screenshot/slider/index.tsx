import * as React from 'react';
import '../../../packages/slider/index.scss';

import Slider from '../../../packages/slider/index';

const SliderScreenShotTests: React.FunctionComponent = () => {
  return (
    <Slider valueMin={0} valueMax={10} valueNow={0}
      notifyChange={(value: number) => console.log(value)}
      notifyInput={() => console.log('input')}/>
  );
};

export default SliderScreenShotTests;
