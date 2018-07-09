import React from 'react';
import PropTypes from 'prop-types';
import BrandVector from './BrandVector';

const dimensions = {
  width: 128,
  height: 40
};

function Brand(props) {
  const { fill } = props;
  const { width, height } = dimensions;
  return (
    <div
      className="relative w-100 _u-lh-0"
      style={{
        paddingBottom: `${Math.ceil((height / width) * 100)}%`
      }}
    >
      <div className="absolute w-100">
        <BrandVector fill={fill} />
      </div>
    </div>
  );
}

Brand.propTypes = {
  fill: PropTypes.string.isRequired
};

export default Brand;
