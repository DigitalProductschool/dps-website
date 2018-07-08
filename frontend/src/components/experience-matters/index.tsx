import * as React from 'react';

class ExperienceMatter extends React.Component {

  render() {
    return (
      <div className="experience-matters u-content-wrapper">
        <div className="experience-matters__content u-content">
          <div className="experience-matters__content__image" />
          <div className="experience-matters__content__description">
            <p> 
              Learn from experts with years of experience. Our mentors, coaches and workshop facilitators come from great companies like … 
            </p>
            <ul>
              <li> <img src="/assets/designit.png" /> </li>
              <li> <img src="/assets/dalabs.png" /> </li>
              <li> <img src="/assets/produktmacher.svg" /> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceMatter;
