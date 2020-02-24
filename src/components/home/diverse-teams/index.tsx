import * as React from 'react';
import { Link } from 'gatsby';

class DiverseTeams extends React.Component {
  render() {
    return (
      <div className="diverse-teams u-content-wrapper">
        <h3 className="diverse-teams__title u-content">Diverse Teams</h3>
        <div className="diverse-teams__content u-content">
          <p className="diverse-teams__content__description">
            We believe that great products are created by diverse and
            crossfunctional teams. At the Digital Product School,{' '}
            <Link to="/tracks/interaction-design" className="u-link">
              <span> interaction designers </span>
            </Link>
            ,{' '}
            <Link to="/tracks/software-engineering" className="u-link">
              <span> software engineers </span>
            </Link>
            ,{' '}
            <Link to="/tracks/artificial-intelligence" className="u-link">
              <span> artificial intelligence engineers </span>
            </Link>
            , and
            <Link to="/tracks/product-management" className="u-link">
              <span> product managers </span>
            </Link>{' '}
            from all over the world are working together across disciplines to
            create great products in a lean and agile way.
          </p>
          <div className="diverse-teams__content__image" />
        </div>
      </div>
    );
  }
}

export default DiverseTeams;
