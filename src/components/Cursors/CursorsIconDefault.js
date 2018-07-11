import React from 'react';
import PropTypes from 'prop-types';

function CusrorsIconDefault(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

CusrorsIconDefault.propTypes = {
  name: PropTypes.string.isRequired
};

export default CusrorsIconDefault;
