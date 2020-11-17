import * as React from 'react';

class RemoteCollaboration extends React.Component {
  render() {
    return (
      <div className="remote-collaboration u-content-wrapper">
        <div className="remote-collaboration u-content">
          <div className="remote-collaboration__content">
            <div className="remote-collaboration-content__image" />
            <p className="remote-collaboration__description">
              Some months ago we were convinced that real teamwork and innovative digital product development only can happen if
              people from different backgrounds and a big pile of post-its come
              together in a small team space. But the COVID-19 pandemic and all
              restrictions associated with it proved us wrong: it also works
              remotely! With the right tools, a creative and open mindset, and
              also some self-discipline you can be a high-end product team in a
              remote-setting as well! We meet at Zoom, we collaborate in Miro
              and we manage our to-dos in Jira.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoteCollaboration;
