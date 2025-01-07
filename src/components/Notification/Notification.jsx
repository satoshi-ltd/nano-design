import * as Haptics from 'expo-haptics';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Animated, Platform, SafeAreaView } from 'react-native';

import { style } from './Notification.style';
import { Icon, Pressable, Text, View } from '../../primitives';

const Notification = ({ children, error = false, text, visible, onClose }) => {
  const translateY = useRef(new Animated.Value(-100)).current; // Valor inicial fuera de la pantalla

  useEffect(() => {
    if (visible && Platform.OS === 'ios') Haptics.notificationAsync();
    Animated.timing(translateY, { toValue: visible ? 0 : -100, duration: 300, useNativeDriver: true }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Animated.View style={[style.notification, error && style.error, { transform: [{ translateY }] }]}>
      <SafeAreaView style={style.safeAreaView}>
        <Icon color="base" name={error ? 'alert-circle-outline' : 'information-outline'} />
        <View style={style.content}>
          {text && (
            <Text bold color="base" caption>
              {text}
            </Text>
          )}
          {children}
        </View>

        {onClose && (
          <Pressable onPress={onClose}>
            <Icon color="base" name="close" />
          </Pressable>
        )}
      </SafeAreaView>
    </Animated.View>
  );
};

Notification.displayName = 'Notification';

Notification.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
  text: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export { Notification };
