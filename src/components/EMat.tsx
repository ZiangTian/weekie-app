import React from 'react';
import './EMatStyles.css';
import GradientComponent from './GradientComponent';
import Lists from './Lists';

const EisenhowerMatrix = () => {
  return (
    <div className="outer-container">
      <div className="eisenhower-matrix">
        <div className="impo">Important</div>
        <div className="title">Eisenhower Matrix</div>

        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>

        <div className="quadrant top-left-quadrant">
            <GradientComponent />
          <div className="text">Urgent</div>
        </div>

        <div className="quadrant top-right-quadrant">
            <GradientComponent/>
        </div>

        <div className="quadrant bottom-left-quadrant">
            <GradientComponent/>
        </div>

        <div className="quadrant bottom-right-quadrant">
            <GradientComponent/>
        </div>

        <div className="matList">
          <Lists/>
        </div>

        
      </div>
    </div>
  );
};

export default EisenhowerMatrix;

