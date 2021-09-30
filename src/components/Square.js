import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: new Counter() };
  }

  // componentDidMount() {
  //   this.count = setCount(() => this.tick(), 1000);
  // }

  // componentWillUnmount() {
  //   pass;
  // }

  render() {
    return (
      <div>
        <button>1</button>
      </div>
    );
  }
}

export default Square;
