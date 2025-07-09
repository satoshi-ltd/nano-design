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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  glassHighlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
