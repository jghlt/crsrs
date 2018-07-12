import React from 'react';
import PropTypes from 'prop-types';
import MastheadBrand from './MastheadBrand';

class Masthead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line: null,
      index: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMout');
    this.updateLine();
  }

  setLine = (line, index) => {
    this.setState(() => {
      return {
        line,
        index
      }
    });
  }

  updateLine = () => {
    const { lines } = this.props;
    const { line, index } = this.state;
    if (!line) {
      this.setLine(lines[0], 0);
    } else {
      const next = (index < lines.length - 1) ? index + 1 : 0;
      this.setLine(lines[next], next);
    }
    setTimeout(() => {
      this.updateLine();
    }, 2500);
  }

  render() {
    const {
      title
    } = this.props;
    const {
      line
    } = this.state;
    return (
      <header className="mw7 center tc">
        <div className="pb4">
          <h1 className="pa0 ma0 dib w-40 _u-lh-0">
            <MastheadBrand />
            <span className="clip">
              {title}
            </span>
          </h1>
        </div>
        <p className="pa0 ma0">
          {line}
        </p>
      </header>
    );
  }
}

Masthead.propTypes = {
  title: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Masthead;
