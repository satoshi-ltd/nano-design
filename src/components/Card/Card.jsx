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
  children,
  color = 'base',
  glassMode = true,
  image,
  outlined = false,
  shadow = false,
  small,
  style: customStyle,
  onPress,
  ...others
}) => {
  const { getGlassLighting } = useGyroscope(glassMode && blur, shadow);

  const has = { shadow, glassMode: glassMode && blur };
  const dynamicGlassStyles = has.glassMode ? getGlassLighting() : undefined;

  return (
    <Pressable
      onPress={onPress}
      style={[
        style.card,
        outlined ? style.outlined : !blur && !image ? getColor(color) : {},
        has.shadow && !has.glassMode
          ? style.shadow
          : dynamicGlassStyles
          ? {
              shadowColor: dynamicGlassStyles.shadowColor,
              shadowOffset: dynamicGlassStyles.shadowOffset,
              shadowOpacity: dynamicGlassStyles.shadowOpacity,
              shadowRadius: dynamicGlassStyles.shadowRadius,
              elevation: dynamicGlassStyles.elevation,
              boxShadow: dynamicGlassStyles.boxShadow,
            }
          : {},
        customStyle,
      ]}
    >
      {image && <ImageBackground source={image} style={style.absolute} />}

      {blur && (
        <BlurView intensity={blurIntensity} tint={blurTint} style={style.absolute}>
          {color && <View style={[style.absolute, { backgroundColor: hexToRgba(color, blurOpacity) }]} />}

          {glassMode && (
            <View
              style={[
                style.absolute,
                style.glassEffect,
                dynamicGlassStyles
                  ? {
                      borderTopColor: dynamicGlassStyles.borderTopColor,
                      borderRightColor: dynamicGlassStyles.borderRightColor,
                      borderBottomColor: dynamicGlassStyles.borderBottomColor,
                      borderLeftColor: dynamicGlassStyles.borderLeftColor,
                    }
                  : {},
              ]}
            />
          )}
        </BlurView>
      )}

      <View {...others} style={[style.content, small && style.small]}>
        {children}
      </View>
    </Pressable>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  blur: PropTypes.bool,
  blurIntensity: PropTypes.number,
  blurOpacity: PropTypes.number,
  blurTint: PropTypes.oneOf(['light', 'dark', 'default']),
  children: PropTypes.node,
  color: PropTypes.string,
  glassMode: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  outlined: PropTypes.bool,
  shadow: PropTypes.bool,
  small: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export { Card };
