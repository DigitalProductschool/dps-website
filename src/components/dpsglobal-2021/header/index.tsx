import * as React from 'react';
import Header from '../../shared/header/section';
import HeaderContentInside from '../../shared/header/content-inside-header';

interface HeaderConferenceProps {
  url: string;
}

class HeaderConference extends React.Component<HeaderConferenceProps, {}> {
  render() {
    const { url } = this.props;
    return (
      <React.Fragment>
        <Header image="/assets/dpsglobal-2021/header/conferenceheader.jpg">
          DPS GLOBAL CONFERENCE
          <br />
          <span className="u-outline"> | MAY 21 &amp; 22</span>
          <HeaderContentInside
            description="From alumni for alumni: all about carriers and knowledge in digital product development"
            buttonText="Get your ticket here!"
            buttonUrl={url}
            target="_blank"
          />
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderConference;
