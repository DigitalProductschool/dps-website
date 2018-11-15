import * as React from 'react';


interface ICookieWarningState {
  showCookieWarning: boolean
  animateOut: boolean,
}

const cookieKey = 'dps-cookie-acknowledged';

class CookieWarning extends React.Component<{}, ICookieWarningState> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      showCookieWarning: false,
      animateOut: false,
    };
  }

  componentDidMount() {
    const showCookieWarning = !localStorage.getItem(cookieKey);

    this.setState({
      showCookieWarning,
    });
  }

  componentDidUpdate(prevProps: {}, prevState: ICookieWarningState) {
    if (this.state.animateOut) {
      localStorage.setItem(cookieKey, 'true');
    } 
  }

  render() {
    const additionalClass = this.state.animateOut ? 'cookie-warning--animate-out' : '';

    return (
      <React.Fragment>
        {this.state.showCookieWarning && (
          <section className={`cookie-warning u-content-wrapper ${additionalClass}`}>
            <div className="u-content">
              <p className="cookie-warning__description">
              To help personalize content, measure accesses, and provide a safer experience, we use cookies. 
              By clicking or navigating the site, you agree to allow our collection of information on 
              and off UnternehmerTUM through cookies. Learn more, including about available controls: <a href="/privacy-policy#cookies">Cookies Policy.</a>
              </p>
              <button className="cookie-warning__button u-button" onClick={() => this.setState({ animateOut: true })}>
                Close
              </button>
            </div>
          </section>
        )}
      </React.Fragment>    
    );
  }
}

export default CookieWarning;
