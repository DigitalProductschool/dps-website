import * as React from 'react';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning/index';
import Nav from '../../components/shared/nav/index';

class Team extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <section className={`team__header u-content-wrapper`}>
          <Nav />
          <div className="team__header-content u-content">
            <h1 className="team__header-content__title">
              WE LIVE AND BREATH UX AND LOVE TO SHARE IT
            </h1>
          </div>
        </section>
        <div className="team__track-image u-content-wrapper">
          <div className="team__track-image-content u-content">
            <div className="team__track-image-content__image">
              <p>
                Organized as an autonomous team itself, the core team mirrors
                the four tracks of DPS with at least one expert of each
                profession. These are supplemented by agile coaches and
                specialists in Business, Marketing and Operations. Before
                joining DPS they gathered long-standing experience in digital
                product development while working at tech-startups or big
                corporates and / or have a distinguished university career
                behind them. Together they support, guide and help the teams to
                develop a user-centric digital product in an agile team.
              </p>
            </div>
          </div>
        </div>

        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Team;
