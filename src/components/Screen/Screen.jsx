import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from '@satoshi-ltd/nano-design';
import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, KeyboardAvoidingView, Modal, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { style } from './Screen.style';

const Screen = ({ disableScroll = false, refreshScroll = true, ...others }) => {
  const [inBackground, setInBackground] = useState(false);
  const scrollview = useRef(null);

  useFocusEffect(
    useCallback(() => {
      if (refreshScroll) scrollview.current?.scrollTo({ y: 0, animated: false });
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      setInBackground(state === 'background' || state === 'inactive');
    });

    return () => subscription.remove();
  }, []);

  const isWeb = Platform.OS === 'web';

  return (
    <>
      <Modal visible={inBackground} transparent={true} animationType="fade">
        <BlurView style={StyleSheet.absoluteFillObject} />
      </Modal>
      <SafeAreaView style={style.safeAreaView}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}> */}
        {React.createElement(
          !isWeb ? KeyboardAvoidingView : React.Fragment,
          !isWeb ? { behavior: disableScroll ? 'padding' : 'height' } : {},
          !disableScroll ? (
            <ScrollView ref={scrollview} style={style.scrollView}>
              <View {...others} />
            </ScrollView>
          ) : (
            <View {...others} />
          ),
        )}
        {/* </TouchableWithoutFeedback> */}
      </SafeAreaView>
    </>
  );
};

Screen.displayName = 'Screen';

Screen.propTypes = {
  children: PropTypes.node,
  disableScroll: PropTypes.bool,
  refreshScroll: PropTypes.bool,
};

export { Screen };
