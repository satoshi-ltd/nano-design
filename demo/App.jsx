import { Button, Card, Image, Text, View } from '@satoshi-ltd/nano-design';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { CommonTheme } from './theme';

StyleSheet.build(CommonTheme);

const cardCommons = {
  flex: true,
  onPress: () => {
    console.log('pressed');
  },
  children: (
    <>
      <Text>Hello</Text>
      <Button>test</Button>
    </>
  ),
};

export default function App() {
  return (
    <>
      <Image
        source={{ uri: 'https://picsum.photos/300/200' }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        resizeMode="cover"
      />
      <View align="center" flex gap offset>
        <Card {...cardCommons} />

        <Card {...cardCommons} color="accent" />

        <Card {...cardCommons} blur color="#ff00ff" blurOpacity={0.1} blurIntensity={50} />

        <Card {...cardCommons} blur color="#fff000" blurOpacity={0.33} blurIntensity={33} />

        <Card {...cardCommons} image={{ uri: 'https://picsum.photos/300/200' }} />

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
    </>
  );
}
