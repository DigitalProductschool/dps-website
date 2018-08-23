import * as React from 'react';

class TeamAssignment extends React.Component {
  render() {
    return (
      <section className="team-assignment u-content-wrapper">
        <div className="team-assignment__content u-content">
          <h2 className="u-title">How we assign the teams</h2>
          <p className="u-text">
            The so-called track heads in the DPS Core Team assign the participants to the teams. The priority here is to distribute the formal skills evenly to all the teams. Although talents can express their preference regarding a certain topic there is no guarantee they will end up in the according team. Equipping all the teams with appropriate skills is the highest priority.
          </p>
          <img src="/assets/program/team-assignment/desc.jpg" className="team-assignment__content_img u-image" />
        </div>
      </section>
    );
  }
}

export default TeamAssignment;
