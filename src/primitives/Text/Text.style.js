import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  text: {
    fontFamily: 'font-default',
    fontWeight: '$fontWeightDefault',
  },

  textSecondary: {
    fontFamily: 'font-default-secondary',
    fontWeight: '$fontWeightDefaultSecondary',
  },

  bold: {
    fontFamily: 'font-bold',
    fontWeight: '$fontWeightBold',
  },

  boldSecondary: {
    fontFamily: 'font-bold-secondary',
    fontWeight: '$fontWeightBoldSecondary',
  },

  // align
  left: {
    alignSelf: 'flex-start',
    textAlign: 'flex-start',
  },

  center: {
    alignSelf: 'center',
    textAlign: 'center',
  },

  right: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
});
