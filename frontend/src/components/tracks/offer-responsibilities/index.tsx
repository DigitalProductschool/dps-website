import * as React from 'react';
import ListItem from '../list-item/index';

export default () => {
  return (
    <div className="or u-content-wrapper">
      <div className="or__content u-content">
        <div className="or__offer">
          <h3 className="or__title">What we offer</h3>
          <ul>
            <ListItem text="Working in a diverse team of interaction designers, software developers, AI engineers and fellow product managers who are passionate about building great digital products" />
            <ListItem text="A unique opportunity to be part of our 3-month training program of the Digital Product School" />
            <ListItem text="Collaboration with local start-ups, industry leaders, researchers and technology" />
            <ListItem text="A modern workplace in the rooms of Design Offices Munich, which was designed and build especially for the needs of DPS to work in a creative and inspiring surrounding" />
            <ListItem text="Grants (750 EUR per month)" />
          </ul>
        </div>
        <div className="or__responsibilities">
          <h3>What we offer</h3>
          <ul>
            <li>
              Working in a diverse team of interaction designers, software developers, AI engineers and fellow product managers who are passionate about building great digital products
            </li>
            <li>
              A unique opportunity to be part of our 3-month training program of the Digital Product School
            </li>
            <li>
              Collaboration with local start-ups, industry leaders, researchers and technology
            </li>
            <li>
              A modern workplace in the rooms of Design Offices Munich, which was designed and build especially for the needs of DPS to work in a creative and inspiring surrounding
            </li>
            <li>
              Grants (750 EUR per month)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
