import React from 'react';
import PropTypes from 'prop-types';

function CusrorsIconAuto(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

CusrorsIconAuto.propTypes = {
  name: PropTypes.string.isRequired
};

export default CusrorsIconAuto;
