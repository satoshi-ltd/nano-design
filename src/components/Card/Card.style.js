import { Platform } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  card: {
    borderRadius: '$borderRadius',
    overflow: 'hidden',
    width: '100%',
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    }),
  },

  outlined: {
    backgroundColor: '$colorBase',
    borderColor: '$colorContent',
    borderStyle: '$borderStyle',
    borderWidth: '$borderWidth',
  },

  absolute: {
    bottom: 0,
    borderRadius: '$borderRadius',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
  },

  glassEffect: {
    borderRadius: '$borderRadius',
    borderWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },

  content: {
    flex: 1,
    padding: '$spaceM',
    width: '100%',
  },

  small: {
    padding: '$spaceS',
  },
});
