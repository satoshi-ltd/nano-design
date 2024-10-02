import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: '$buttonRadius',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '$spaceS',
    maxHeight: '$buttonHeight',
    minHeight: '$buttonHeight',
    minWidth: '$buttonHeight',
    overflow: 'hidden',
    paddingHorizontal: '$buttonHeight / 3',
  },

  buttonIcon: {
    paddingHorizontal: 0,
  },

  disabled: {
    backgroundColor: '$colorBorder',
  },

  flex: {
    flex: 1,
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
    gap: '$spaceXS',
    maxHeight: '$buttonSmallHeight',
    minHeight: '$buttonSmallHeight',
    minWidth: '$buttonSmallHeight',
    paddingHorizontal: '$buttonSmallHeight / 3',
  },

  large: {
    maxHeight: '$buttonLargeHeight',
    minHeight: '$buttonLargeHeight',
    minWidth: '$buttonLargeHeight',
    paddingHorizontal: '$buttonLargeHeight / 3',
  },
});
