import * as React from 'react';

class ExperienceMatter extends React.Component {
  render() {
    return (
      <div className="experience-matters u-content-wrapper">
        <div className="experience-matters__content u-content">
          <div className="experience-matters__content__image">
            <div className="experience-matters__content__image-dotted" />
            <p className="experience-matters__content__image__text">
              {' '}
              Experience matters{' '}
            </p>
            <p className="experience-matters__content__image__text experience-matters__content__image__text--stroked u-outline">
              <span> Experience </span> matters
            </p>
          </div>
          <div className="experience-matters__content__description">
            <p>
              Learn from experts with years of experience. Our mentors, coaches
              and workshop facilitators come from great companies like …
            </p>
            <ul>
              <li>
                {' '}
                <img
                  alt="designit-logo"
                  title="Designit, experience partner of Digital Product School"
                  src="/assets/home/experience-matters/designit.webp"
                />{' '}
              </li>
              <li>
                {' '}
                <img
                  alt="star-logo"
                  title="Star, experience partner of Digital Product School"
                  src="/assets/home/experience-matters/star.webp"
                />{' '}
              </li>
              <li>
                {' '}
                <img
                  alt="looping-group-logo"
                  title="Looping Group, experience partner of Digital Product School"
                  src="/assets/home/experience-matters/looping-group.webp"
                />{' '}
              </li>
              <li>
                {' '}
                <img
                  alt="produktmacher-logo"
                  title="DieProduktMacher, experience partner of Digital Product School"
                  src="/assets/home/experience-matters/produktmacher.webp"
                />{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceMatter;
