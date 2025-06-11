import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { style } from './Pagination.style';

const Dot = ({ active }) => {
  const springAnimation = useRef(new Animated.Value(active ? 1 : 0)).current;
  const colorAnimation = useRef(new Animated.Value(active ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(springAnimation, {
      toValue: active ? 1 : 0,
      friction: 4,
      tension: 40,
      useNativeDriver: false,
    }).start();

    Animated.timing(colorAnimation, {
      toValue: active ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [active, springAnimation, colorAnimation]);

  const dotSize = EStyleSheet.value('$paginationSize');
  const dotColor = EStyleSheet.value('$paginationColor');
  const dotColorActive = EStyleSheet.value('$paginationColorActive');

  const animatedStyles = {
    width: springAnimation.interpolate({ inputRange: [0, 1], outputRange: [dotSize, dotSize * 2] }),
    maxWidth: springAnimation.interpolate({ inputRange: [0, 1], outputRange: [dotSize, dotSize * 2] }),
    backgroundColor: colorAnimation.interpolate({ inputRange: [0, 1], outputRange: [dotColor, dotColorActive] }),
  };

  return <Animated.View style={[style.dot, animatedStyles]} />;
};

Dot.propTypes = {
  active: PropTypes.bool,
};

export { Dot };
