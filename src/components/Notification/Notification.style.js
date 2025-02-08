import { Platform } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  notification: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  container: {
    alignItems: 'flex-start',
    backgroundColor: '$colorContent',
    borderRadius: '$borderRadius',
    gap: '$viewOffset / 2',
    marginHorizontal: '$viewOffset',
    paddingHorizontal: '$viewOffset / 2',
    paddingVertical: '$viewOffset',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.33,
    shadowRadius: 8,
    ...Platform.select({ web: { marginTop: '$viewOffset' } }),
  },

  error: {
    backgroundColor: '$colorError',
  },

  content: {
    flex: 1,
    gap: '$viewOffset / 4',
  },

  text: {
    opacity: 0.66,
  },
});
