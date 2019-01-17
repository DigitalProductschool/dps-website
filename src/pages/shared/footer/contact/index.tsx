import * as React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        Questions? <br/>
        Contact us, we are friendly:<br />
        <a href="mailto:hello@dpschool.io" className="contact__email">hello@dpschool.io</a>
      </div>
    )
  }
}

export default Contact;
