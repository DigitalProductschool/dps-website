import * as React from 'react';
import SVG from 'react-inlinesvg'

class LinkRow extends React.Component {
  render() {
    return (
      <div className="link_row u-content">
        <div className="link_row__legal">
          <a href="/legal-disclosure">Impressum – Legal Disclosure</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="link_row__social__media">
          <a href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos">
            <SVG src="/assets/youtube.svg" className="link_row__social__media__link"></SVG>
          </a>
          <a href="https://www.instagram.com/digitalproductschool/">
            <SVG className="link_row__social__media__link" src="/assets/instagram.svg"></SVG>
          </a>
          <a href="https://twitter.com/dpschool_io">
            <SVG className="link_row__social__media__link" src="/assets/twitter.svg"></SVG>
          </a>
          <a href="https://www.facebook.com/digitalproductschool">
            <SVG className="link_row__social__media__link" src="/assets/facebook.svg"></SVG>
          </a>
        </div>
      </div>
    );
  }
}

export default LinkRow;
