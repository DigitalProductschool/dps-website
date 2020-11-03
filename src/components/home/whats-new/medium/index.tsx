import * as React from 'react';

class Medium extends React.Component {
  state = {
    author: '',
    thumbnail: '',
    link: '',
    title: '',
  };

  componentDidMount = () => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://leaks.digitalproductschool.io/feed'
    )
      .then(res => res.json())
      .then(data => {
        const res = data.items[0];
        var stringified = JSON.stringify(res);
        var stringified = stringified.replace('&amp;', '&');
        var jsonObject = JSON.parse(stringified);
        return jsonObject;
      })
      .then(res => {
        const author = res.author;
        const link = res.link;
        const thumbnail = res.thumbnail;
        const title = res.title;
        this.setState({
          author: author,
          link: link,
          thumbnail: thumbnail,
          title: title,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <a
        href={this.state.link}
        target="_blank"
        className="whats-new__content__tile u-link"
      >
        <div
          className="whats-new__content__tile__thumb"
          style={{ backgroundImage: `url(${this.state.thumbnail})` }}
        ></div>
        <article>
          <h4>{this.state.title}</h4>

          <p>by {this.state.author}</p>
          <span>Read on Medium ...</span>
        </article>
      </a>
    );
  }
}

export default Medium;
