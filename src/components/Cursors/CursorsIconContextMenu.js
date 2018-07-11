import React from 'react';
import PropTypes from 'prop-types';

function CusrorsIconContectMenu(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

CusrorsIconContectMenu.propTypes = {
  name: PropTypes.string.isRequired
};

export default CusrorsIconContectMenu;
