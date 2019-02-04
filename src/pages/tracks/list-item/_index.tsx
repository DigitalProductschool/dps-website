import * as React from 'react';


export default (props: { text: string }) => {
  return (
    <li className="hash-list-item">
      <span className="hash-list-item__hash">
        #
      </span>
      {props.text}
    </li>
  );
}
