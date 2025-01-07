import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  notification: {
    backgroundColor: '$colorContent',
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  error: {
    backgroundColor: '$colorError',
  },

  content: {
    flex: 1,
  },

  safeAreaView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '$viewOffset / 2',
    marginHorizontal: '$viewOffset',
    marginVertical: '$viewOffset / 2',
    width: 'auto',
  },
});
