import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native';

import { style } from './Card.style';
import { getColor } from './modules';
import { hexToRgba, useGyroscope } from './utils';
import { Pressable, View } from '../../primitives';

const Card = ({
  blur = false,
  blurIntensity = 50,
  blurOpacity = 0.1,
  blurTint = 'light',
  color,
  glassMode = true,
  image,
  outlined = false,
  small,
  ...others
}) => {
  const Component = others.onPress ? Pressable : View;
  const { getGlassLighting } = useGyroscope(glassMode && blur);

  return blur ? (
    <BlurView intensity={blurIntensity} tint={blurTint} style={[style.card, small && style.small, others.style]}>
      {color && <View style={[style.overlay, { backgroundColor: hexToRgba(color, blurOpacity) }]} />}
      {glassMode && (
        <View
          style={[
            style.glassEffect,
            {
              borderWidth: 1,
              ...getGlassLighting(),
            },
          ]}
        />
      )}
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
  blurIntensity: PropTypes.number,
  blurOpacity: PropTypes.number,
  blurTint: PropTypes.oneOf(['light', 'dark', 'default']),
  color: PropTypes.string,
  glassMode: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  outlined: PropTypes.bool,
  small: PropTypes.bool,
};

export { Card };
