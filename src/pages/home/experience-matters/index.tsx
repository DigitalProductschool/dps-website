import * as React from 'react';

class ExperienceMatter extends React.Component {

  render() {
    return (
      <div className="experience-matters u-content-wrapper">
        <div className="experience-matters__content u-content">
          <div className="experience-matters__content__image">
            <div className="experience-matters__content__image-dotted" />
            <p className="experience-matters__content__image__text"> Experience matters </p>
            <p className="experience-matters__content__image__text experience-matters__content__image__text--stroked u-outline">
              <span> Experience </span> matters
            </p>
          </div>
          <div className="experience-matters__content__description">
            <p>
              Learn from experts with years of experience. Our mentors, coaches and workshop facilitators come from great companies like …
            </p>
            <ul>
              <li> <a href="https://www.designit.com/"> <img src="/assets/home/experience-matters/designit.png" /> </a> </li>
              <li> <a href="http://www.dalabs.de/"> <img src="/assets/home/experience-matters/dalabs.png" /> </a> </li>
              <li> <a href="https://www.dieproduktmacher.com/"> <img src="/assets/home/experience-matters/produktmacher.png" /> </a> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceMatter;
