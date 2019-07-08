import * as React from 'react'

interface IHeaderContentProps {
  className: string
  onContentButtonClick: () => void
}

class HeaderContent extends React.Component<IHeaderContentProps, {}> {
  render() {
    const { className, onContentButtonClick } = this.props

    return (
      <div className={`${className} header-content`}>
        <h1 className="header-content__title header-content__title--first">
          Master your project.
        </h1>
        <h1 className="header-content__title">
          Become <span className="u-outline">experienced.</span>
        </h1>
        <p className="header-content__description">
          The Digital Product School Munich is where interdisciplinary teams
          learn how to build digital products that solve real-world problems.
        </p>
        <div className="header-content__buttons">
          <a
            className="u-button u-button__apply"
            href="https://utum.typeform.com/to/qkkFHF?ref=website&entry-point=header"
          >
            Apply Now
          </a>
          <button
            className="header-content__buttons__more"
            onClick={onContentButtonClick}
          >
            No, I need more info first
          </button>
        </div>
      </div>
    )
  }
}

export default HeaderContent
