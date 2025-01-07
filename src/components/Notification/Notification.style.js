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

  text: {
    flex: 1,
  },

  safeAreaView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '$spaceXS',
    marginHorizontal: '$viewOffset',
    marginVertical: '$spaceS',
    width: 'auto',
  },
});
