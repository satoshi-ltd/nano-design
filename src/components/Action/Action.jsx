import PropTypes from 'prop-types';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { style } from './Action.style';
import { Activity, Pressable, Text } from '../../primitives';

const Action = ({ activity = false, children, color = 'accent', disabled, onPress = () => {}, ...others }) => {
  return (
    <Pressable onPress={!disabled && !activity ? onPress : undefined} style={style.action}>
      {!activity ? (
        <Text align="center" bold {...others} color={disabled ? 'disabled' : color} style={style.text}>
          {children}
        </Text>
      ) : (
        <Activity size="small" color={StyleSheet.value(color == 'accent' ? '$colorAccent' : '$colorContent')} />
      )}
    </Pressable>
  );
};

Action.propTypes = {
  activity: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export { Action };
