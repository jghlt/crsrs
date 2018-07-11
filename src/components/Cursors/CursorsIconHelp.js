import React from 'react';
import PropTypes from 'prop-types';

function CusrorsIconHelp(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

CusrorsIconHelp.propTypes = {
  name: PropTypes.string.isRequired
};

export default CusrorsIconHelp;
