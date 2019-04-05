import * as React from 'react';

class DiverseTeams extends React.Component {
  render() {
    return (
      <div className="diverse-teams u-content-wrapper">
        <h3 className="diverse-teams__title u-content">
          Diverse Teams
        </h3>
        <div className="diverse-teams__content u-content">
          <p className="diverse-teams__content__description">
            We believe that great products are created by diverse teams. At the Digital Product School, interaction designers, 
            software engineers, data scientists and product managers from all over the world are working together across disciplines 
            to create great products in a lean and agile way.
          </p>
          <div className="diverse-teams__content__image" />
        </div>
      </div>
    );
  }
}

export default DiverseTeams;
