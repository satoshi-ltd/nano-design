import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, Platform } from 'react-native';

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
  shadow = false,
  small,
  ...others
}) => {
  const { getGlassLighting } = useGyroscope(glassMode && blur, shadow);
  const hasPress = !!others.onPress;

  // Separar style de otras props de layout
  const { style: customStyle, children, onPress, ...layoutProps } = others;

  const renderContent = () => {
    const cardStyle = [style.card, small && style.small, image && style.cardImage, customStyle];
    
    // Aplicar shadow estático cuando shadow=true y NO está en glassMode
    const shadowStyles = shadow && !(glassMode && blur) ? Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    }) : {};

    return blur ? (
      <BlurView intensity={blurIntensity} tint={blurTint} style={[cardStyle, shadowStyles]}>
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
        <View {...layoutProps} style={style.content}>{children}</View>
      </BlurView>
    ) : image ? (
      <View style={[cardStyle, shadowStyles]}>
        <ImageBackground source={image} style={style.imageContainer} imageStyle={style.backgroundImage}>
          <View {...layoutProps} style={style.content}>{children}</View>
        </ImageBackground>
      </View>
    ) : (
      <View style={[...cardStyle.slice(0, -1), outlined ? style.outlined : getColor(color), customStyle, shadowStyles]}>
        <View {...layoutProps}>{children}</View>
      </View>
    );
  };

  return hasPress ? <Pressable onPress={onPress} style={customStyle}>{renderContent()}</Pressable> : renderContent();
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
  shadow: PropTypes.bool,
  small: PropTypes.bool,
};

export { Card };
