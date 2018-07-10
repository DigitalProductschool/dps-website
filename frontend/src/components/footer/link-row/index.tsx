import * as React from 'react';

class LinkRow extends React.Component {
  render() {
    return (
      <div className="link_row u-content">
        <div className="link_row__legal">
          <a href="/legal_disclosure">Impressum – Legal Disclosure</a>
          <a href="/privacy_policy">Privacy Policy</a>
        </div>
        <div className="link_row__social__media">
          <a href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos"><img className="link_row__social__media__link" src="/assets/youtube.svg" /></a>
          <a href="https://www.instagram.com/digitalproductschool/"><img className="link_row__social__media__link" src="/assets/instagram.svg" /></a>
          <a href="https://twitter.com/dpschool_io"><img className="link_row__social__media__link" src="/assets/twitter.svg" /></a>
          <a href="https://www.facebook.com/digitalproductschool"><img className="link_row__social__media__link" src="/assets/facebook.svg" /></a>
        </div>
      </div>
    );
  }
}

export default LinkRow;
