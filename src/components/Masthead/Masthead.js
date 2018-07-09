import React from 'react';
import MastheadBrand from './MastheadBrand';

class Masthead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Masthead: componentDidMount');
  }

  render() {
    return (
      <header className="mw7 center tc">
        <div className="pb4">
          <h1 className="pa0 ma0 dib w-40 _u-lh-0">
            <MastheadBrand />
            <span className="clip">
              CRSR
            </span>
          </h1>
        </div>
        <p className="pa0 ma0">
          All cursors, all the time
        </p>
      </header>
    );
  }
}

export default Masthead;
