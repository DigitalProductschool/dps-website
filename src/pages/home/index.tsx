import * as React from 'react';

import HomeHeader from '../../components/home/header/index';
import Pitch from '../../components/home/pitch/index';
import DiverseTeams from '../../components/home/diverse-teams';
import UserFirst from '../../components/home/user-first';
import Adac from '../../components/home/adac';
import WhatsNew from '../../components/home/whats-new';
import PickTrack from '../../components/shared/pick-track';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';

interface IHeaderProps {
  headerType: string;
}

class Home extends React.Component<IHeaderProps, {}> {
  private forwardedRef: React.RefObject<HTMLDivElement> = React.createRef();
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <HomeHeader
          onContentButtonClick={() =>
            this.forwardedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
          headerType={this.props.headerType}
        />
        <Pitch forwardedRef={this.forwardedRef} />
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
