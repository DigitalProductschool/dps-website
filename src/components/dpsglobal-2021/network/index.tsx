import * as React from 'react';

class Network extends React.Component {
  render() {
    return (
      <section className="network u-section-margin-top u-content-wrapper">
        <div className="network__content u-content">
          <h2 className="u-title">
            DPS Global – Digital Product Schools' Alumni Network
          </h2>
          <ul className="network__list">
            <li className="network__list__item">
              <div className="network__list__item__icon-wrapper">
                <img
                  alt="calendar-logo"
                  className="network__list__item__icon-wrapper__img network__list__item__icon-wrapper__img"
                  src="/assets/dpsglobal-2021/network/icon-batches.png"
                />
              </div>
              <h4 className="network__list__item__title">12 Batches</h4>
            </li>
            <li className="network__list__item">
              <div className="network__list__item__icon-wrapper">
                <img
                  alt="scholarship-logo"
                  className="network__list__item__icon-wrapper__img network__list__item__icon-wrapper__img"
                  src="/assets/dpsglobal-2021/network/icon-tracks.png"
                />
              </div>
              <h4 className="network__list__item__title">92 Teams</h4>
            </li>
            <li className="network__list__item">
              <div className="network__list__item__icon-wrapper">
                <img
                  alt="network-logo"
                  className="network__list__item__icon-wrapper__img network__list__item__icon-wrapper__img"
                  src="/assets/dpsglobal-2021/network/icon-alumni.png"
                />
              </div>
              <h4 className="network__list__item__title">> 500 Alumni</h4>
            </li>
            <li className="network__list__item">
              <div className="network__list__item__icon-wrapper">
                <img
                  alt="agile-logo"
                  className="network__list__item__icon-wrapper__img network__list__item__icon-wrapper__img"
                  src="/assets/dpsglobal-2021/network/icon-world.png"
                />
              </div>
              <h4 className="network__list__item__title"> > 60 Countries</h4>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Network;
