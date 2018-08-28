import * as React from 'react';

class TeamsAndRoles extends React.Component {
  render() {
    return (
      <section className="teams-roles u-content-wrapper u-section-margin-top">
        <div className="teams-roles__content u-content">
          <h3 className="u-title">The Teams and their Roles</h3>
          <div className="teams-roles__content__description u-grid-6-4">
            <img className="teams-roles__content__description__image u-image" src="/assets/apply/teams-roles.jpg" />
            <div>
              <p className="u-text">
                Our teams are »cross-functional«. This means that product managers, interaction designers, software engineers and artificial intelligence engineers work together to find out what the user needs and to build the product. Choose YOUR role and apply for Digital Product School!
              </p>
              <p className="u-text u-text--bold">
                Currently you can apply for the following batches:
                <ul>
                  <li>- Batch #6: January 7 to March 29, 2019</li>
                  <li>- Batch #7: May 2 to July 26, 2019</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamsAndRoles;
