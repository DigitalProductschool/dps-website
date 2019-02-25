import * as React from 'react';

class WhatsNew extends React.Component {
  render() {
    return (
      <section className="whats-new u-content-wrapper u-section-margin-top">
        <div className="whats-new__content u-content">
          <h3 className="u-title">WHAT'S NEW</h3>
          <div className="whats-new__content__tiles">
            <div className="item-1">
              <a href="https://leaks.digitalproductschool.io/design-thinking-a-creative-way-to-foster-innovation-ab9ef97cd884" className="whats-new__content__tile u-link">
                <div className="whats-new__content__tile__thumb whats-new__content__tile__thumb--design-thinking">
                </div>
                <article>
                  <h4>Design Thinking - a creative way to foster innovation</h4>
                  <p>by Denise Wildner</p>
                  <span>Read on Medium ...</span>
                </article>
              </a>
            </div>
            <div className="item-2">
              <a href="https://leaks.digitalproductschool.io/how-should-education-look-like-the-dps-model-7488d5a1567c" className="whats-new__content__tile u-link">
                <div className="whats-new__content__tile__thumb whats-new__content__tile__thumb--dps-batch5">
                </div>
                <article>
                  <h4>How should education look like? — The DPS Model</h4>
                  <p>by Ayush Sengupta</p>
                  <span>Read on Medium ...</span>
                </article>
              </a>
            </div>
            <div className="item-3">
              <a href="https://www.youtube.com/watch?v=pVikgqTpulg" className="whats-new__content__tile u-link">
                <div className="whats-new__content__tile__thumb u-youtube">
                  <iframe
                    title="video: biergarden chat with Nathalie Nahai" 
                    src="https://www.youtube-nocookie.com/embed/pVikgqTpulg" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <article>
                  <h4>Beergarden Chat with Nathalie Nahai</h4>
                  <p>
                    Are tech companies shifting from making people addicted to using their product to serving users in a positive way?
                  </p>
                  <span>Watch on our YouTube channel</span>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatsNew;
