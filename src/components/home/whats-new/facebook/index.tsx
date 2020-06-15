import * as React from 'react';
import FacebookCopy from '../../../../../static/assets/home/whats-new/facebook.png';
import moment from 'moment';

class Facebook extends React.Component {
  state = {
    thumbnail: '',
    link: '',
    time: '',
    desc: '',
  };

  componentDidMount = () => {
    fetch(
      `https://graph.facebook.com/v7.0/digitalproductschool/posts?fields=message,updated_time,full_picture,permalink_url&access_token=${process.env.REACT_APP_FACEBOOK_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        const res = data.data[0];
        const thumbnail = res.full_picture;
        const link = res.permalink_url;
        const desc = res.message.match(/((.|\n){1,100}\w)\s/)[1] + ' ...';
        const time = moment(res.updated_time).format('Do MMMM [at] H:mm ');
        console.log(res);
        console.log(process.env.REACT_APP_FACEBOOK_KEY);
        this.setState({
          link: link,
          thumbnail: thumbnail,
          desc: desc,
          time: time,
        });
      });
  };

  render() {
    return (
      <a href={this.state.link} className="whats-new__content__tile u-link">
        <div
          className="whats-new__content__tile__thumb whats-new__content__tile__thumb--design-thinking"
          style={{ backgroundImage: `url(${this.state.thumbnail})` }}
        ></div>
        <article>
          <div className="row">
            <div className="column1">
              <img
                src={FacebookCopy}
                alt="Girl in a jacket"
                width="35"
                height="30"
              />
            </div>
            <div className="column2">
              <h4>Digital Product School</h4>
              <p className="whats-new__content__time">{this.state.time}</p>
            </div>
          </div>
          <p>{this.state.desc}</p>
          <span>Read on Facebook ...</span>
        </article>
      </a>
    );
  }
}

export default Facebook;
