import * as React from 'react'

import Nav from '../../shared/nav/index'

type trackData = {
  title: string
  description1: string
  description2: string
}

const data: {
  se: trackData
  pm: trackData
  ixd: trackData
  ai: trackData
} = {
  se: {
    title: 'Software Engineer',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description2:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  ai: {
    title: 'AI Engineer',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description2:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  pm: {
    title: 'Product Manager',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description2:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  ixd: {
    title: 'Interaction Designer',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description2:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
}

interface IHeaderProps {
  track: 'se' | 'pm' | 'ixd' | 'ai'
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { track } = this.props

    return (
      <section
        className={`applications__header u-content-wrapper applications__header--${track}`}
      >
        <Nav logo="/assets/tracks/dps-logo-white.png" />
        <div className="applications__header-content u-content">
          <h1 className="applications__header-content__title">
            APPLICATION AS <br /> {data[track].title}
          </h1>
          <p className="applications__header-content__description">
            {data[track].description1}
          </p>
          <p className="applications__header-content__description">
            {data[track].description2}
          </p>
        </div>
      </section>
    )
  }
}

export default Header
