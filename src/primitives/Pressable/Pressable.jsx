import * as Haptics from 'expo-haptics';
import PropTypes from 'prop-types';
import React from 'react';
import { Platform, Pressable as PressableBase, View as ViewBase } from 'react-native';

import { style } from './Pressable.style';

const Pressable = ({ children, feedback = true, onPress, ...others }) => (
  <PressableBase
    {...others}
    onPress={
      onPress
        ? () => {
            if (Platform.OS === 'ios') Haptics.selectionAsync();
            onPress();
          }
        : undefined
    }
    style={[style.container, !onPress && style.disabled, others.style]}
  >
    {({ pressed }) => (
      <>
        {children}
        {feedback && pressed && <ViewBase style={[style.overflow, style.disabled]} />}
      </>
    )}
  </PressableBase>
);

Pressable.displayName = 'Pressable';

Pressable.propTypes = {
  children: PropTypes.node,
  feedback: PropTypes.bool,
  onPress: PropTypes.func,
};

export { Pressable };
