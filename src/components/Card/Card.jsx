import PropTypes from 'prop-types';
import React from 'react';

import { style } from './Card.style';
import { getColor } from './modules';
import { Pressable, View } from '../../primitives';

const Card = ({ color, small, outlined = false, ...others }) =>
  React.createElement(others.onPress ? Pressable : View, {
    ...others,
    style: [style.card, small && style.small, outlined ? style.outlined : getColor(color), others.style],
  });

Card.displayName = 'Card';

Card.propTypes = {
  color: PropTypes.string,
  small: PropTypes.bool,
  outlined: PropTypes.bool,
  onPress: PropTypes.func,
};

export { Card };
