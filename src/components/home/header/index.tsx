import * as React from 'react';

import Nav from '../../shared/nav/index';
import Cover from './cover/index';
import HeaderContent from './header-content/index';

interface IHeaderProps {
  onContentButtonClick: () => void;
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { onContentButtonClick } = this.props;

    return (
      <React.Fragment>
        <section className="header u-content-wrapper">
          <Nav />
          <Cover />
          <HeaderContent
            onContentButtonClick={onContentButtonClick}
            className="u-content"
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
