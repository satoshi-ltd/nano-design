import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  card: {
    borderRadius: '$borderRadius',
    padding: '$spaceM',
    width: '100%',
  },

  outlined: {
    backgroundColor: '$colorBase',
    borderColor: '$colorContent',
    borderStyle: '$borderStyle',
    borderWidth: '$borderWidth',
  },

  small: {
    padding: '$spaceS',
  },

  backgroundImage: {
    borderRadius: '$borderRadius',
  },

  content: {
    backgroundColor: 'transparent',
  },

  overlay: {
    borderRadius: '$borderRadius',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  glassEffect: {
    borderRadius: '$borderRadius',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
