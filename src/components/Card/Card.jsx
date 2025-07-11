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
  const { getGlassLighting } = useGyroscope(glassMode && blur);
  const hasPress = !!others.onPress;

  const renderContent = () => {
    const cardStyle = [style.card, small && style.small, others.style];

    return blur ? (
      <BlurView intensity={blurIntensity} tint={blurTint} style={cardStyle}>
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
        <View style={style.content}>{others.children}</View>
      </BlurView>
    ) : image ? (
      <ImageBackground source={image} style={cardStyle} imageStyle={style.backgroundImage}>
        <View style={style.content}>{others.children}</View>
      </ImageBackground>
    ) : (
      <View style={[...cardStyle.slice(0, -1), outlined ? style.outlined : getColor(color), others.style]}>
        {others.children}
      </View>
    );
  };

  return hasPress ? <Pressable {...others}>{renderContent()}</Pressable> : renderContent();
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
