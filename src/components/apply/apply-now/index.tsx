import * as React from 'react';
import Header from '../../shared/header/section';
import HeaderContent from '../../shared/header/content';

function Link(props) {
  return (
    <a href={props.href} className="u-link">
      <span>{props.children}</span>
    </a>
  );
}

class ApplyNow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header image="/assets/apply/dps-apply.jpg">
          Become an experienced digital product maker!
        </Header>
        <HeaderContent>
          Digital Product School will show you how you act in an autonomous and
          interdisciplinary team and what "agile", "Scrum" and "Design Thinking"
          and all the other buzzwords mean. You will experience how it is to
          work with real start-up flair and how to develop digital products that
          solve real user problems in a lean way.
          <br />
          Find out more about <Link href="/our-program">our program</Link> or
          apply now for one of our roles below!
        </HeaderContent>
      </React.Fragment>
    );
  }
}

export default ApplyNow;
