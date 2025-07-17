import { Card, Setting, View } from '@satoshi-ltd/nano-design';
import { registerRootComponent } from 'expo';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { CommonTheme } from './theme';

StyleSheet.build(CommonTheme);

const App = () => {
  return (
    <>
      <View align="center" flex gap offset>
        <Card>
          <Setting activity caption="test" text="test" icon="home" />
          <Setting caption="test" text="test" icon="home" />
          <Setting caption="test" text="test" icon="home" />
          <Setting caption="test" text="test" icon="home" />
        </Card>
      </View>
    </>
  );
};

registerRootComponent(App);
