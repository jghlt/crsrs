import React from 'react';
import PropTypes from 'prop-types';
import Masthead from '../Masthead/Masthead';
import CursorsList from '../Cursors/CursorsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="relative">
        <div className="pa4 pb6-ns">
          <div className="pv6">
            <Masthead {...this.props}/>
          </div>
          <div className="mw9 center tc">
            <CursorsList {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cursors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    declaration: PropTypes.string.isRequired
  })).isRequired
};

export default App;
