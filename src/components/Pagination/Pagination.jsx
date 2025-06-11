import PropTypes from 'prop-types';
import React from 'react';

import { Dot } from './Pagination.Dot';
import { style } from './Pagination.style';
import { View } from '../../primitives';

const Pagination = ({ currentIndex, length = 0, ...others }) =>
  length > 0 ? (
    <View row style={[style.pagination, others.style]}>
      {Array.from({ length }).map((_, index) => (
        <Dot key={index} active={index === currentIndex} />
      ))}
    </View>
  ) : null;

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  currentIndex: PropTypes.number,
  length: PropTypes.number,
};

export { Pagination };
