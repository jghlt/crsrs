import React from 'react';
import PropTypes from 'prop-types';
import CursorsListItem from './CursorsListItem';

class CusrorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('CusrorsList: componentDidMount');
  }

  render() {
    const { cursors } = this.props;
    return (
      <ul className="list ma0 pa0 flex flex-row flex-wrap">
        {cursors.map(cursor => <CursorsListItem key={cursor.name} {...cursor}/>)}
      </ul>
    );
  }
}

CusrorsList.propTypes = {
  cursors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    declaration: PropTypes.string.isRequired
  })).isRequired
};

export default CusrorsList;
