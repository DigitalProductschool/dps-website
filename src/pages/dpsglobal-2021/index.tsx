import * as React from 'react';

import HeaderConference from '../../components/dpsglobal-2021/header/index';
import Welcome from '../../components/dpsglobal-2021/welcome/index';
import WhoCanJoin from '../../components/dpsglobal-2021/who-can-join/index';
import Alumni from '../../components/dpsglobal-2021/alumni/index';
import Network from '../../components/dpsglobal-2021/network/index';
import ScheduleSpeakers from '../../components/dpsglobal-2021/schedule-speakers/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import Nav from '../../components/shared/nav/index';

class Conference extends React.Component {
  state = {
    conferenceUrl:
      'https://www.eventbrite.de/e/dps-global-conference-2021-tickets-145267618357',
  };

  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav />
        <HeaderConference url={this.state.conferenceUrl} />
        <Welcome url={this.state.conferenceUrl} />
        <WhoCanJoin url={this.state.conferenceUrl} />
        <Alumni />
        <Network />
        <ScheduleSpeakers url={this.state.conferenceUrl} />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Conference;
