import * as React from 'react';

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
            <a href={this.props.url} target="_blank" className="u-link">
              <span>DPS GLOBAL CONFERENCE 2021</span>
            </a>
            , the most diverse and interactive virtual event experience ever. We
            will not only cover topics like design, technology &amp; management
            but will provide you with inspirational talks, insights, workshops,
            recruiting opportunities, networking events, share new tools and
            methods.
          </p>
          <div className="welcome__content__description">
            <div>
              <p className="u-text">
                <br />
                <b>Keynote by Jeff Gothelf</b>
                <br />
                Jeff Gothelf is the author of "Lean UX" and "Forever
                Employable". As a consultant and coach, he helps organizations
                to build better products and executives build the cultures that
                build better products. He founded several conferences about user
                experience design, digital transformation, and business agility
                and is a sought-after speaker on events and conferences all over
                the world.
                <br />
              </p>
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
