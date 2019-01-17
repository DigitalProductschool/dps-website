import * as React from 'react';
import SVG from 'react-inlinesvg'
import { Link } from 'gatsby';

class LinkRow extends React.Component {
  render() {
    return (
      <div className="link_row u-content">
        <div className="link_row__legal">
          <Link to="/legal-disclosure"> Impressum – Legal Disclosure </Link>
          <Link to="/privacy-policy"> Privacy Policy </Link>
        </div>
        <div className="link_row__social__media">
          <a href="https://www.facebook.com/digitalproductschool">
            <SVG className="link_row__social__media__link" src="/assets/shared/footer/link-row/facebook.svg"></SVG>
          </a>
          <a href="https://twitter.com/dpschool_io">
            <SVG className="link_row__social__media__link" src="/assets/shared/footer/link-row/twitter.svg"></SVG>
          </a>
          <a href="https://www.instagram.com/digitalproductschool/">
            <SVG className="link_row__social__media__link" src="/assets/shared/footer/link-row/instagram.svg"></SVG>
          </a>
          <a href="https://www.youtube.com/channel/UCvmerSnTMl2ZeoLtuKoONJQ/videos">
            <SVG className="link_row__social__media__link" src="/assets/shared/footer/link-row/youtube.svg"></SVG>
          </a>
        </div>
      </div>
    );
  }
}

export default LinkRow;
