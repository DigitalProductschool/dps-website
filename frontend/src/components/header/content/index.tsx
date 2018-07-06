import * as React from 'react';


interface IContentProps {
  className: string;
}

class Content extends React.Component<IContentProps, {}> {
  render() {
    const { className } = this.props;

    return (
      <div className={`${className} content`}>
          <h1 className="content__title content__title--first">
            Master your project.
          </h1>
          <h1 className="content__title">
            Become <span className="u-outline">experienced.</span>
          </h1>
          <p className="content__description">
            The Digital Product School Munich is where interdisciplinary teams learn how to
            build digital products that solve real-world problems.
          </p>
          <div className="content__buttons">
            <button className="content__buttons__apply"> 
              Apply now
            </button>
            <button className="content__buttons__more">
              No, I need more info first
            </button>
          </div>
        </div>
    );
  }
}

export default Content;
