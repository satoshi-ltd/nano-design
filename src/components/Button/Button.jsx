import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import { style } from './Button.style';
import { Icon, Pressable, Text } from '../../primitives';

const Button = ({
  activity = false,
  children,
  disabled,
  flex = false,
  icon,
  large = false,
  outlined = false,
  secondary = false,
  small = false,
  onPress = () => {},
  ...others
}) => {
  const common = {
    caption: small,
    color: disabled
      ? 'disabled'
      : !outlined
      ? StyleSheet.value(secondary ? '$buttonChildrenColorSecondary' : 'buttonChildrenColor')
      : undefined,
  };

  return (
    <Pressable
      disabled={disabled}
      feedback
      onPress={!disabled && !activity ? onPress : undefined}
      style={[
        style.button,
        large ? style.large : small ? style.small : undefined,
        flex && style.flex,
        !children ? style.buttonIcon : undefined,
        disabled ? style.disabled : secondary ? style.secondary : outlined ? style.outlined : style.primary,
        others.style,
      ]}
    >
      {!activity ? (
        <>
          {icon && <Icon {...common} name={icon} />}
          {children && (
            <Text bold {...common} style={style.text}>
              {children}
            </Text>
          )}
        </>
      ) : (
        <ActivityIndicator
          size="small"
          color={StyleSheet.value(secondary || outlined ? '$colorContent' : '$colorBase')}
        />
      )}
    </Pressable>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  activity: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  flex: PropTypes.bool,
  icon: PropTypes.string,
  large: PropTypes.bool,
  outlined: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  onPress: PropTypes.func,
};

export { Button };
