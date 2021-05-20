import * as React from 'react';

class Conference extends React.Component {
  componentDidMount() {
    window.location.replace(
      'http://www.globalconference.digitalproductschool.io/'
    );
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default Conference;
