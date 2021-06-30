import * as React from 'react';
import { Link } from 'gatsby';

class DiverseTeams extends React.Component {
  render() {
    return (
      <div className="diverse-teams u-content-wrapper u-section-margin-top">
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
            , and{' '}
            <Link to="/tracks/product-management" className="u-link">
              <span> product managers </span>
            </Link>{' '}
            from all over the world are working together across disciplines to
            create great products in a lean and agile way. <br />
            They are accompanied by{' '}
            <Link to="/tracks/agile-coach" className="u-link">
              <span> agile team coaches </span>
            </Link>
            that helps them to work together and to reach their full potential as a product team. <br />
            At the same time,{' '}
            <Link to="/tracks/product-marketing-communications-manager" className="u-link">
              <span> product marketing managers </span>
            </Link>
            form marketing teams and solve specific communication challenges for our company partners.
            <br /> Interested?{' '}
             <Link to="/apply" className="u-link">
               <span>Apply Now!</span>
             </Link>
          </p>
          <div className="diverse-teams__content__image" />
        </div>
      </div>
    );
  }
}

export default DiverseTeams;
