import * as React from 'react';
import ListItem from '../list-item/index';

interface IORProps {
  data: {
    offer: Array<string>,
    responsibilities: Array<string>,
  }
}

export default (props: IORProps) => {
  return (
    <div className="or u-content-wrapper">
      <div className="or__content u-content">
        <div className="or__offer">
          <h3 className="or__title">What we offer</h3>
          <ul>
            {props.data.offer.map((text, index) => (
              <ListItem text={text} key={index} />
            ))}
          </ul>
        </div>
        <div className="or__responsibilities">
          <h3 className="or__title">Responsibilities</h3>
          <ul>
            {props.data.responsibilities.map((text, index) => (
              <ListItem text={text} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
