import * as React from 'react';
import ListItem from '../list-item/index';

export default () => {
  return (
    <div className="wwe u-content-wrapper">
      <div className="wwe__content u-content">
        <h3 className="wwe__title">What we expect</h3>
        <div className="wwe__lists">  
          <ul>
            <ListItem text="You own a university degree (business, computer science, psychology or similar)" />
            <ListItem text="You’ve got a passion for creating and trying out new things" />
            <ListItem text="You are interested and knowledgeable in digital trends, technology, and culture" />
            <ListItem text="You’ve got the ability to thrive under pressure and function effectively in a fast-paced environment and to provide strong leadership" />
          </ul>
          <ul>
            <ListItem text="You have a deep interest in creating and analyzing products and markets" />
            <ListItem text="You’ve got excellent analytical, problem-solving, organizational and interpersonal skills" />
            <ListItem text="You can communicate clearly – verbally and written" />
            <ListItem text="You are a cross-functional influencer with the ability to build strong relationships between people" />
            <ListItem text="You’ve got a good sense for design" />
          </ul>
        </div>
      </div>
    </div>
  );
}
