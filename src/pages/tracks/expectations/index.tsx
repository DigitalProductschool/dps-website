import * as React from 'react';
import ListItem from '../list-item/index';

interface IExpectationsProps {
  data: {
    firstColumn: Array<string>,
    secondColumn: Array<string>,
  }
}

export default (props: IExpectationsProps) => {
  return (
    <div className="expectations u-content-wrapper">
      <div className="expectations__content u-content">
        <h3 className="expectations__title">What we expect</h3>
        <div className="expectations__lists">  
          <ul>
            {props.data.firstColumn.map((text, index) => (
              <ListItem text={text} key={index} />
            ))}
          </ul>
          <ul>
            {props.data.secondColumn.map((text, index) => (
              <ListItem text={text} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
