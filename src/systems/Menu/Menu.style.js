import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  modal: {
    paddingHorizontal: '$viewOffset * 2',
    paddingVertical: '$viewOffset',
  },

  critical: {
    marginTop: '$viewOffset',
  },
});
