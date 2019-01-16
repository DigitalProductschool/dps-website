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
    <div className="wwe u-content-wrapper">
      <div className="wwe__content u-content">
        <h3 className="wwe__title">What we expect</h3>
        <div className="wwe__lists">  
          <ul>
            {props.data.firstColumn.map((text) => (
              <ListItem text={text} />
            ))}
          </ul>
          <ul>
            {props.data.secondColumn.map((text) => (
              <ListItem text={text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
