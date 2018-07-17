import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from '../../node_modules/@types/react-router';


class ScrollToNav extends React.Component<RouteComponentProps<any, StaticContext>, {}> {
  componentDidUpdate(prevProps: RouteComponentProps<any, StaticContext>) {
    if (this.props.location !== prevProps.location) {
      const nav = document.getElementsByClassName('nav');

      if (nav.length > 0) {
        setTimeout(() => nav[0].scrollIntoView(), 0);
      }   
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToNav)

