import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native';

import { style } from './Card.style';
import { getColor } from './modules';
import { Pressable, View } from '../../primitives';

const Card = ({ color, image, outlined = false, small, ...others }) => {
  const Component = others.onPress ? Pressable : View;

  return image ? (
    <ImageBackground
      source={image}
      style={[style.card, small && style.small, others.style]}
      imageStyle={style.backgroundImage}
    >
      <Component {...others} style={style.content}>
        {others.children}
      </Component>
    </ImageBackground>
  ) : (
    React.createElement(Component, {
      ...others,
      style: [style.card, small && style.small, outlined ? style.outlined : getColor(color), others.style],
    })
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  color: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  outlined: PropTypes.bool,
  small: PropTypes.bool,
};

export { Card };
