import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from '@satoshi-ltd/nano-design';
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { style } from './Screen.style';

const Screen = ({ disableScroll = false, refreshScroll = true, ...others }) => {
  const scrollview = useRef(null);

  useFocusEffect(
    useCallback(() => {
      if (refreshScroll) scrollview.current?.scrollTo({ y: 0, animated: false });
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const isWeb = Platform.OS === 'web';

  return (
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
  );
};

Screen.displayName = 'Screen';

Screen.propTypes = {
  children: PropTypes.node,
  disableScroll: PropTypes.bool,
  refreshScroll: PropTypes.bool,
};

export { Screen };
