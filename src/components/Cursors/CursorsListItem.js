import React from 'react';
import PropTypes from 'prop-types';
import vendorPrefix from 'css-vendor-prefix';

// Icons are imported dynamnically see:
// * https://medium.com/@magbicaleman/intro-to-dynamic-import-in-create-react-app-6305bb397c46
const prefix = 'CursorsIcon';

class CusrorsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      clicked: false,
      hovered: false,
      icon: null,
      isTouch: ('ontouchstart' in window)
    };
  }

  componentDidMount() {
    const { component } = this.props;
    const path = `${prefix}${component}`;
    import(`./${path}`)
      .then(icon => this.setState({
        icon: icon.default
      }));
  }

  setCopied = (value) => {
    this.setState(() => {
      return {
        copied: value
      };
    });
  }

  setClicked = (value) => {
    this.setState(() => {
      return {
        clicked: value
      };
    });
  }

  setHovered = (value) => {
    this.setState(() => {
      return {
        hovered: value
      };
    });
  }

  handleClick = () => {
    if (!this.state.clicked) {
      this.setClicked(true);
      setTimeout(() => {
        this.setClicked(false);
      }, 150);
    }
    if (!this.state.copied) {
      this.setCopied(true);
      setTimeout(() => {
        this.setCopied(false);
      }, 1200);
    }
  }

  handleMouseEnter = () => {
    if (!this.state.isTouch) {
      this.setHovered(true);
    }
  }

  handleMouseLeave = () => {
    if (!this.state.isTouch) {
      this.setHovered(false);
    }
  }

  render() {
    const {
      clicked,
      hovered,
      copied,
      icon: Component
    } = this.state;
    const {
      name,
      prefix,
      declaration
    } = this.props;
    const value = (prefix) ? `-${vendorPrefix}-${name}` : name;
    const styles = {
      cursor: value
    };
    return (
      <li
        tabIndex="0"
        role="button"
        style={styles}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`relative w-100 w-third-m w-20-l ba _o-box _u-bgc-white ${(hovered) ? 'is-hovered' : ''} ${(clicked) ? 'is-clicked' : ''}`}
      >
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover">
            <div className="dt w-100 h-100">
              <div className="dtc v-mid">
                <div className="_o-cursor">
                  <div className="aspect-ratio aspect-ratio--1x1">
                    <div className="aspect-ratio--object cover">
                      <div className="dt w-100 h-100">
                        <div className="dtc v-mid">
                          <div className="_o-box-icon dib">
                            { Component && <Component /> }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 right-0 bottom-0">
                  <div className="pa3 f6 _u-transform-hack">
                    {(copied)
                      ?
                      <span className="_u-c-green">
                        {'copied ✔'}
                      </span>
                      :
                      name
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

CusrorsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  declaration: PropTypes.string.isRequired
};

export default CusrorsListItem;
