import * as React from 'react';

export default (props: { track: 'pm' | 'se' | 'ai' | 'ixd' | 'pmm' }) => {
  const imageClassName = `tracks__track-image-content__image--${props.track}`;
  return (
    <div className="tracks__track-image u-content-wrapper">
      <div className="tracks__track-image-content u-content">
        <div
          className={`tracks__track-image-content__image ${imageClassName}`}
        ></div>
      </div>
    </div>
  );
};
