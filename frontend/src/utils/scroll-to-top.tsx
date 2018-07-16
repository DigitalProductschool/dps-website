import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from '../../node_modules/@types/react-router';


class ScrollToTop extends React.Component<RouteComponentProps<any, StaticContext>, {}> {
  componentDidUpdate(prevProps: RouteComponentProps<any, StaticContext>) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
