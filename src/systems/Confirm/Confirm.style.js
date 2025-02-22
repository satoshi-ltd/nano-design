import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  overflow: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  content: {
    backgroundColor: '$colorContent',
    borderRadius: '$borderRadius',
    marginHorizontal: '$viewOffset',
    padding: '$viewOffset * 1.5',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.33,
    shadowRadius: 8,
  },

  buttons: {
    marginTop: '$viewOffset * 1.5',
    gap: '$viewOffset * 1.5',
  },
});
