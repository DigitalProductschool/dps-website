import * as React from 'react';
import ListItem from '../list-item/index';

interface IORProps {
  or: {
    offer: Array<String>,
    responsibilities: Array<String>,
  }
}

export default (props: IORProps) => {
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
          <h3 className="or__title">Responsibilities</h3>
          <ul>
            <ListItem text="Applying suitable user research methodologies and conducting usability tests to deliver valuable insights for other team members" />
            <ListItem text="Conducting user experiments at any stage of the product development process" />
            <ListItem text="Defining a product vision and strategy" />
            <ListItem text="Solving real-world problems through working with several industry partners" />
            <ListItem text="Collaborate ​with the other product managers, interaction designers, software- and AI engineers in your team on the journey from the problem to the product" />
            <ListItem text="Defining and measuring KPIs for ensuring your product’s success" />
          </ul>
        </div>
      </div>
    </div>
  );
}
