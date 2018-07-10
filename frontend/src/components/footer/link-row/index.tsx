import * as React from 'react';

class LinkRow extends React.Component {
  render() {
    return (
      <div className="link_row">
        <a href="/legal_disclosure">Impressum – Legal Disclosure</a>
        <a href="/privacy_policy">Privacy Policy</a>
        <a href="https://www.facebook.com/digitalproductschool"><img className="link_row__social__media" src="/assets/facebook.svg" /></a>
        <a href="https://twitter.com/dpschool_io"><img className="link_row__social__media" src="/assets/twitter.svg" /></a>
        <a href="https://www.instagram.com/digitalproductschool/"><img className="link_row__social__media" src="/assets/instagram.svg" /></a>
        <a href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos"><img className="link_row__social__media" src="/assets/youtube.svg" /></a>
      </div>
    );
  }
}

export default LinkRow;
