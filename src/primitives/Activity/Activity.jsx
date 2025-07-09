import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Activity = ({ 
  color, 
  size = 'small', 
  ...others 
}) => (
  <ActivityIndicator
    {...others}
    color={color}
    size={size}
    style={others.style}
  />
);

Activity.displayName = 'Activity';

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

export { Activity };