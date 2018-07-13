import * as React from 'react';

class Cover extends React.Component {
  render() {
    return (
      <React.Fragment> 
        <video autoPlay muted loop className="cover__video"> 
          <source src="assets/headervideo-1680-758.mp4" type="video/mp4" />
        </video>
      </React.Fragment> 
    );
  }
} 

export default Cover;
