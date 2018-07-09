import React from 'react';

class CusrorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('CusrorList: componentDidMount');
  }

  render() {
    return (
      <h1>CusrorList</h1>
    );
  }
}

export default CusrorList;
