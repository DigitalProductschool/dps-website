import * as React from 'react';

export interface HelloProps { 
  compiler: string; 
  framework: string; 
}

export interface HelloState {
  title: string;
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.setState({ title: 'Hi' })}>
          Hello from {this.props.compiler} and {this.props.framework}!
          Click me to display greeting!
          <p> {this.state.title} </p>
        </h1>
      </div>
    );
  }
}
