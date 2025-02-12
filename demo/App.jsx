import { Button } from '@satoshi-ltd/nano-design';
import React from 'react';
import { View } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import { CommonTheme } from './theme';

StyleSheet.build(CommonTheme);

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 32 }}>
      <Button disabled large>
        Test Component
      </Button>
    </View>
  );
}
