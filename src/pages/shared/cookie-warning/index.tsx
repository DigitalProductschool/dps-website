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

  injectGoogleManager() {
    const id = 'dps-google-manager';
    const el = document.getElementById(id);

    if (!el) {
      const script = document.createElement("script");
      script.setAttribute('id', id);
      const scriptText = document.createTextNode(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5HGJ5CL');`)
      script.appendChild(scriptText);
      document.body.appendChild(script);
    }
  }

  componentDidMount() {
    const showCookieWarning = !localStorage.getItem(cookieKey);

    if (!showCookieWarning) {
      this.injectGoogleManager();
    }

    this.setState({
      showCookieWarning,
    });
  }

  componentDidUpdate(prevProps: {}, prevState: ICookieWarningState) {
    if (this.state.animateOut) {
      this.injectGoogleManager();
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
                To help personalize content, measure accesses, and provide a safer experience, 
                we would like to use cookies. Please click on "I agree" to allow us the collection 
                of information on and off Digital Product School through cookies. Learn more, 
                including about available controls: <a href="/privacy-policy#cookies">Cookies Policy.</a>
              </p>
              <button className="cookie-warning__button u-button" onClick={() => this.setState({ animateOut: true })}>
                I agree
              </button>
            </div>
          </section>
        )}
      </React.Fragment>    
    );
  }
}

export default CookieWarning;
