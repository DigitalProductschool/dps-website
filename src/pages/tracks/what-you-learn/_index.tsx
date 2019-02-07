import * as React from 'react';

export default (props: { className: string }) => {
  return (
    <div>
      <div className="wyl-content__info">
        <div className={`wyl-content__background  ${props.className}`}>
        </div>
        <div className="u-content-wrapper" style={{ width: '100vw' }}>
          <div className="wyl-content__info-w u-content">
            <h1 className="wyl-content__title">
              WHAT YOU LEARN
              </h1>
            <h3 className="wyl-content__subtitle">
              If you do not have any experience as a product manager - it is fine! At DPS you will experience what it means to be a PM in the digital life!
              </h3>
            <div className="wyl-content__info__description-box">
              <div className="wyl-content__info__description-box__text">
                <p>
                  To enrich that experience, the DPS teams are not only solving problems through creating digital products – they also extend their professional knowledge and skills in workshops hold by domain experts from all over the world.
                  </p>
                <p>
                  During the whole Program the DPS core team will mentor all participants, give guidance and react to challenges that come up at short notice.
                  </p>
              </div>
              <div className="wyl-content__info__description-box__image">
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
