import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, ImageBackground } from 'react-native';

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
  placeholderColor,
  small,
  style: customStyle,
  onPress,
  ...others
}) => {
  const { getGlassLighting } = useGyroscope(glassMode && blur, shadow);
  const [imageLoading, setImageLoading] = useState(false);
  const pulseAnimation = useRef(new Animated.Value(0.5)).current;

  const has = { shadow, glassMode: glassMode && blur };
  const dynamicGlassStyles = has.glassMode ? getGlassLighting() : undefined;

  useEffect(() => {
    if (imageLoading && image) {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 0.7,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      );
      animation.start();
      return () => animation.stop();
    }
  }, [imageLoading, image, pulseAnimation]);

  const handleImageLoadStart = () => {
    setImageLoading(true);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageLoadEnd = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      {...(onPress ? { onPress } : {})}
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
      {image && (
        <ImageBackground
          source={image}
          style={style.absolute}
          onLoadStart={handleImageLoadStart}
          onLoad={handleImageLoad}
          onLoadEnd={handleImageLoadEnd}
          onError={handleImageError}
        />
      )}

      {/* Pulse loading state for image */}
      {image && imageLoading && (
        <Animated.View
          style={[
            style.absolute,
            style.placeholder,
            {
              backgroundColor: placeholderColor || '$colorBorder',
              opacity: pulseAnimation,
            },
          ]}
        />
      )}

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
    </Wrapper>
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
  placeholderColor: PropTypes.string,
  small: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export { Card };
