import React from 'react';
import PropTypes from 'prop-types';

class CusrorsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('CusrorListItem: componentDidMount');
  }

  render() {
    const { name } = this.props;
    const styles = {
      cursor: name
    };
    return (
      <li
        className="relative w-100 w-third-m w-20-l ba _o-box _u-bgc-white"
        style={styles}
      >
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover">
            <div className="dt w-100 h-100">
              <div className="dtc v-mid">
                <div className="absolute left-0 right-0 bottom-0">
                  <div className="pa3 f6">
                    {name}
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
  declaration: PropTypes.string.isRequired
};

export default CusrorsListItem;
