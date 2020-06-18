import * as React from 'react';

class Medium extends React.Component {
  state = {
    desc: '',
    thumbnail: '',
    title: '',
    id: '',
  };

  componentDidMount = () => {
    fetch(
      'https://europe-west1-dps-website-staging-0.cloudfunctions.net/whatsnewyoutube'
    )
      .then(res => res.json())
      .then(data => {
        const desc = data.desc.match(/(.{1,60}\w)\s/)[1] + '...';
        const thumbnail = data.thumbnail;
        const title = data.title;
        const id = data.id;
        this.setState({
          desc: desc,
          thumbnail: thumbnail,
          title: title,
          id: id,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <a
        href={'https://www.youtube.com/watch?v=' + this.state.id}
        className="whats-new__content__tile u-link"
        target="_blank"
      >
        <div className="whats-new__content__tile__thumb u-youtube">
          <iframe
            title="video: biergarden chat with Nathalie Nahai"
            src={'https://www.youtube.com/embed/' + this.state.id}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <article>
          <h4>{this.state.title}</h4>
          <p>{this.state.desc}</p>
          <span>Watch on our YouTube channel</span>
        </article>
      </a>
    );
  }
}

export default Medium;
