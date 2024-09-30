import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: '$buttonRadius',
    justifyContent: 'center',
    minHeight: '$buttonHeight',
    maxHeight: '$buttonHeight',
    overflow: 'hidden',
    paddingHorizontal: '$buttonHeight / 2',
  },

  disabled: {
    backgroundColor: '$colorBorder',
  },

  flex: {
    flex: 1,
    opacity: 0.1,
  },

  outlined: {
    backgroundColor: 'transparent',
    borderColor: '$colorContent',
    borderStyle: '$borderStyle',
    borderWidth: '$borderWidth',
  },

  primary: {
    backgroundColor: '$buttonColorPrimary',
  },

  secondary: {
    backgroundColor: '$buttonColorSecondary',
  },

  text: {
    fontFamily: '$buttonFontFamily',
    fontWeight: '$buttonFontWeight',
  },

  small: {
    minHeight: '$buttonSmallHeight',
    maxHeight: '$buttonSmallHeight',
    paddingHorizontal: '$buttonSmallHeight / 2',
  },

  large: {
    minHeight: '$buttonLargeHeight',
    maxHeight: '$buttonLargeHeight',
    paddingHorizontal: '$buttonLargeHeight / 2',
  },
});
