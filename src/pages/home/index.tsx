import * as React from 'react';

import Header from '../../components/home/header/index';
import Pitch from '../../components/home/pitch/index';
import DiverseTeams from '../../components/home/diverse-teams';
import UserFirst from '../../components/home/user-first';
import Adac from '../../components/home/adac';
import WhatsNew from '../../components/home/whats-new';
import PickTrack from '../../components/shared/pick-track';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import DPSCorona from '../../components/home/dps-corona';
import RemoteCollaboration from '../../components/home/remote-collaboration';
import TheSetting from '../../components/home/the-setting';

interface IHomeProps {
  headerType: string;
}

class Home extends React.Component<IHomeProps, {}> {
  private forwardedRef: React.RefObject<HTMLDivElement> = React.createRef();
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header
          onContentButtonClick={() =>
            this.forwardedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
          headerType={this.props.headerType}
        />
        <Pitch forwardedRef={this.forwardedRef} />
        <DPSCorona />
        <RemoteCollaboration />
        <TheSetting />
        <DiverseTeams />
        <UserFirst />
        <PickTrack isApplyNowVersion={false} />
        <WhatsNew />
        <Adac />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
