import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native';

import { style } from './Card.style';
import { getColor } from './modules';
import { Pressable, View } from '../../primitives';

const Card = ({
  blur = false,
  blurColor = '#ffffff',
  blurIntensity = 66,
  blurOpacity = 0.33,
  blurTint = 'light',
  color,
  image,
  outlined = false,
  small,
  ...others
}) => {
  const Component = others.onPress ? Pressable : View;

  const getOverlayColor = () => {
    const hexColor = blurColor.startsWith('#') ? blurColor : `#${blurColor}`;
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${blurOpacity})`;
  };

  return blur ? (
    <BlurView intensity={blurIntensity} tint={blurTint} style={[style.card, small && style.small, others.style]}>
      <View style={[style.overlay, { backgroundColor: getOverlayColor() }]} />
      <View style={style.glassHighlight} />
      <Component {...others} style={style.content}>
        {others.children}
      </Component>
    </BlurView>
  ) : image ? (
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
  blur: PropTypes.bool,
  blurColor: PropTypes.string,
  blurIntensity: PropTypes.number,
  blurOpacity: PropTypes.number,
  blurTint: PropTypes.oneOf(['light', 'dark', 'default']),
  color: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  outlined: PropTypes.bool,
  small: PropTypes.bool,
};

export { Card };
