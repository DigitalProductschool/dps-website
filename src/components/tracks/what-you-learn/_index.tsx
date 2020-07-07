import * as React from 'react';

export default (props: {
  className: string;
  data: {
    firstColumn: string;
    secondColumn: string;
    subtitle: string;
    track: string;
    video?: string;
  };
}) => {
  const imageClassName = `wyl-content__info__description-box__image--${props.data.track}`;

  function descriptionBox(video?: string) {
    if (video === undefined) {
      return (
        <div
          className={`wyl-content__info__description-box__image ${imageClassName}`}
        />
      );
    } else {
      return (
        <div className="u-youtube wyl-content__info__description-box__image">
          <iframe
            title="video: Software Engineering Experiences at Digital Product School"
            src={video}
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      );
    }
  }

  return (
    <div>
      <div className="wyl-content__info">
        <div className={`wyl-content__background  ${props.className}`} />
        <div className="u-content-wrapper" style={{ width: '100vw' }}>
          <div className="wyl-content__info-w u-content">
            <h1 className="wyl-content__title">WHAT YOU LEARN</h1>
            <h3 className="wyl-content__subtitle">{props.data.subtitle}</h3>
            <div className="wyl-content__info__description-box">
              <div className="wyl-content__info__description-box__text">
                <p>{props.data.firstColumn}</p>
                <p>{props.data.secondColumn}</p>
              </div>
              {descriptionBox(props.data.video)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
