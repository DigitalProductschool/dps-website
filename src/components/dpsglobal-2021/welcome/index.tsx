import * as React from 'react';
import { Link } from 'gatsby';

interface WelcomeProps {
  url: string;
}

class Welcome extends React.Component<WelcomeProps, {}> {
  render() {
    return (
      <section className="welcome u-content-wrapper">
        <div className="welcome__content u-content">
          <p className="u-text">
            Welcome to the{' '}
            <Link to={this.props.url} className="u-link" target="_blank">
              <span> DPS GLOBAL CONFERENCE 2021 </span>
            </Link>
            , the most diverse and interactive virtual event experience ever. We
            will not only cover topics like design, technology &amp; management
            but will provide you with inspirational talks, insights, workshops,
            recruiting opportunities, networking events, share new tools and
            methods.
          </p>
          <div className="welcome__content__description">
            <div className="u-text">
              <br />
              <h2 className="u-title welcome__content__title">
                KEYNOTE BY JEFF GOTHELF
              </h2>
              <br />
              Jeff Gothelf is the author of "Lean UX" and "Forever Employable".
              As a consultant and coach, he helps organizations to build better
              products and executives build the cultures that build better
              products. He founded several conferences about user experience
              design, digital transformation, and business agility and is a
              sought-after speaker on events and conferences all over the world.
              <br />
            </div>
            <img
              alt="welcome-description-image"
              className="welcome__content__description__image u-image"
              src="/assets/dpsglobal-2021/welcome/jeff-gothelf.jpg"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
