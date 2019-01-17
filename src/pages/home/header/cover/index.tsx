import * as React from 'react';
import video from "../../../../assets/home/header/headervideo-1680-758.mp4";
console.log(`hello ${video}`);

class Cover extends React.Component {
  render() {
    return (
      <React.Fragment>
        <video autoPlay muted loop className="cover__video">
          <source src={video} type="video/mp4" />
        </video>
      </React.Fragment>
    );
  }
}

export default Cover;
