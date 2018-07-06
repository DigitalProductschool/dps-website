import * as React from 'react';

class CoverVideo extends React.Component {

  render() {
    return (
      <video autoPlay muted loop className="cover__video"> 
        <source src="assets/headervideo-1680-758.mp4" type="video/mp4" />
      </video>
    );
  }
} 

export default CoverVideo;
