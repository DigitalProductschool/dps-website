import * as React from 'react';

interface IPitchProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

class Pitch extends React.Component<IPitchProps, {}> {
  render() {
    const { forwardedRef } = this.props;

    return (
      <div className="pitch u-content-wrapper" ref={forwardedRef}> 
        <h3 className="u-content pitch__content">
          Build a digital product that users really love. Work in a cross-functional product team. Gain professional experience.<br /> 
          Be part of our great community of digital product makers!
        </h3>
      </div>
    );
  }
}

export default Pitch;
