import React from 'react';

class CusrorListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('CusrorListItem: componentDidMount');
  }

  render() {
    return (
      <h1>CusrorListItem</h1>
    );
  }
}

export default CusrorListItem;
