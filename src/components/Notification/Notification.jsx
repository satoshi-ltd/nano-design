import * as Haptics from 'expo-haptics';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Platform, SafeAreaView } from 'react-native';

import { style } from './Notification.style';
import { Icon, Pressable, Text, View } from '../../primitives';

const GAP = 512;

const Notification = ({ children, color = 'base', error = false, icon, text, title, visible, onClose, ...others }) => {
  const translateY = useRef(new Animated.Value(-GAP)).current;

  useEffect(() => {
    if (visible && Platform.OS === 'ios') Haptics.notificationAsync();
    Animated.timing(translateY, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      toValue: visible ? 0 : -GAP,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Animated.View style={[style.notification, { transform: [{ translateY }] }]}>
      <SafeAreaView>
        <View row style={[style.container, error && style.error, others.style]}>
          {(title || text) && (
            <Icon color={color} name={icon || (error ? 'alert-circle-outline' : 'information-outline')} />
          )}
          <View style={style.content}>
            {title && (
              <Text bold caption color={color}>
                {title}
              </Text>
            )}
            {text && (
              <Text caption color={color} style={style.text}>
                {text}
              </Text>
            )}
            {children}
          </View>

          {onClose && (
            <Pressable onPress={onClose}>
              <Icon color={color} name="close" />
            </Pressable>
          )}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

Notification.displayName = 'Notification';

Notification.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  error: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  visible: PropTypes.bool,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
};

export { Notification };
