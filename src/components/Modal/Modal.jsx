import PropTypes from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';

import { style } from './Modal.style';
import { Icon, Pressable, View } from '../../primitives';

const presentation = 'transparentModal';

const Modal = ({ fullscreen = false, onClose, ...others }) => {
  return presentation === 'transparentModal' ? (
    <View style={style.overflow}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={[style.safeAreaView, fullscreen && style.fullscreen]}>
          {onClose && (
            <Pressable onPress={onClose} style={style.pressableClose}>
              <Icon name="chevron-down" title />
            </Pressable>
          )}
          <View {...others} style={[style.content, onClose && style.contentModal, others.style]} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  ) : (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View {...others} style={[style.content, others.style]} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node,
  fullscreen: PropTypes.bool,
  gap: PropTypes.bool,
  onClose: PropTypes.func,
};

export { Modal };
