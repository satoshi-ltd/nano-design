import { Button, Card, Image, Text, View } from '@satoshi-ltd/nano-design';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { CommonTheme } from './theme';

StyleSheet.build(CommonTheme);

console.log(Image);

export default function App() {
  return (
    <View align="center" flex gap offset>
      <Image
        source={{ uri: 'https://picsum.photos/300/200' }}
        style={{ width: 300, height: 200, position: 'absolute', top: 0, left: 0 }}
        resizeMode="cover"
      />
      <Card>
        <Text>Hello</Text>
        <Button>test</Button>
      </Card>

      <Card blur blurColor="#ff00ff" blurOpacity={0.1} blurIntensity={50}>
        <Text>Hello</Text>
        <Button>test</Button>
      </Card>

      <Card image={{ uri: 'https://picsum.photos/300/200' }}>
        <Text>Hello</Text>
        <Button>test</Button>
      </Card>

      <Image
        source={{ uri: 'https://picsum.photos/300/200' }}
        style={{ width: 300, height: 200, borderRadius: 8 }}
        resizeMode="cover"
        activityColor="gray"
        activitySize="large"
      />

      <Button disabled large>
        Test Component
      </Button>
    </View>
  );
}
