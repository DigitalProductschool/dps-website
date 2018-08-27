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
          Join our international community of digital product makers and gain professional experience through working in a cross-functional product team.
        </h3>
      </div>
    );
  }
}

export default Pitch;
