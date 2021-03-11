import * as React from 'react';

class Alumni extends React.Component {
  render() {
    return (
      <section className="alumni u-content-wrapper">
        <div className="alumni__content u-content">
          <h2 className="u-title">Whom will you meet?</h2>
          <div className="alumni__content__description">
            <img
              alt="alumni-description-image"
              className="alumni__content__description__image u-image"
              src="/assets/dpsglobal-2021/alumni/alumni.jpg"
            />
            <p className="u-text">
              The DPS Alumni are a fantastic mixture of international product
              managers, UX designers, software engineers, data scientists,
              innovators, strategists, researchers, and other interesting
              fields. They come with different cultural and educational
              backgrounds and are spread all over the world but all of them have
              one common goal that is to build human-centric digital products.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Alumni;
