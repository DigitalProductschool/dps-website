import * as React from 'react';
import Medium from './medium/index';
import Youtube from './youtube/index';
import Facebook from './facebook/index';

class WhatsNew extends React.Component {
  render() {
    return (
      <section className="whats-new u-content-wrapper u-section-margin-top">
        <div className="whats-new__content u-content">
          <h3 className="u-title">WHAT'S NEW</h3>
          <div className="whats-new__content__tiles">
            <div className="whats-new__content__rows">
              <div className="item-1 ">
                <a
                  href="https://www.facebook.com/digitalproductschool/"
                  target="_blank"
                >
                  <div className="u-link" style={{ paddingBottom: '10px' }}>
                    <span>On Facebook ...</span>
                  </div>
                </a>
              </div>
              <div className="item-1 ">
                <Facebook />
              </div>
            </div>

            <div className="whats-new__content__rows">
              <div className="item-2">
                <a
                  href="https://leaks.digitalproductschool.io/"
                  target="_blank"
                >
                  <div className="u-link" style={{ paddingBottom: '10px' }}>
                    <span>On Medium ...</span>
                  </div>
                </a>
              </div>
              <div className="item-2">
                <Medium />
              </div>
            </div>

            <div className="whats-new__content__rows">
              <div className="item-3">
                <a
                  href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos"
                  target="_blank"
                >
                  <div className="u-link" style={{ paddingBottom: '10px' }}>
                    <span>On YouTube ...</span>
                  </div>
                </a>
              </div>
              <div className="item-3">
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatsNew;
