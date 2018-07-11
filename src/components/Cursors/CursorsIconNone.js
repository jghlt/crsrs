import React from 'react';
import PropTypes from 'prop-types';

function CusrorsIconNone(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

CusrorsIconNone.propTypes = {
  name: PropTypes.string.isRequired
};

export default CusrorsIconNone;
