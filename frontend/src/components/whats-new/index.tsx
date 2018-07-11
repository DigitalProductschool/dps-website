import * as React from 'react';

class WhatsNew extends React.Component {
  render() {
    return (
      <section className="whats-new u-content-wrapper">
        <div className="whats-new__content u-content">
          <h3 className="u-title">WHAT'S NEW</h3>
          <ul className="whats-new__content__tiles">
            <li className="whats-new__content__tile">
              <div className="whats-new__content__tile__header">
                <img src="/assets/design-thinking.gif" />
              </div>
              <h4>Design Thinking - a creative way to foster innovation</h4>
              <p>by Denise Wildner</p>
              <a href="#">Read on Medium ...</a>
            </li>
            <li className="whats-new__content__tile">
              <div className="whats-new__content__tile__header">
                <img src="/assets/review.jpg" />
              </div>
              <h4>Digital Product School – An Honest Review</h4>
              <p>by Tian-Yuan Zhao</p>
              <a href="#">Read on Medium ...</a>
            </li>
            <li className="whats-new__content__tile">
              <div className="whats-new__content__tile__header u-youtube">
                <iframe src="https://www.youtube.com/embed/pVikgqTpulg?rel=0&amp;showinfo=0"></iframe>
              </div>
              <h4>Beergarden Chat with Nathalie Nahai</h4>
              <p>
                Are tech companies shifting from making people addictive towards serving users in a positive way?
              </p>
              <a href="#">Watch on our YouTube channel</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default WhatsNew;
