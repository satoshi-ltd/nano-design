import { Platform } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  icon: {
    position: 'absolute',
    right: 16,
    alignSelf: 'flex-end',
  },

  input: {
    backgroundColor: '$inputBackgroundColor',
    borderColor: '$inputBorderColor',
    borderRadius: '$inputBorderRadius',
    borderStyle: '$inputBorderStyle',
    borderWidth: '$inputBorderWidth',
    color: '$inputColor',
    fontFamily: '$inputFontFamily',
    fontSize: '$inputFontSize',
    fontWeight: '$inputFontWeight',
    paddingLeft: '$inputPaddingHorizontal',
    paddingRight: '$inputPaddingHorizontal',
    paddingBottom: '$inputPaddingVertical',
    paddingTop: '$inputPaddingVertical',
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
  },

  disabled: {
    backgroundColor: '$colorBorder',
    borderColor: '$colorBorder',
    color: '$colorDisabled',
  },

  error: {
    backgroundColor: '$inputBackgroundColorFocus',
    borderColor: '$colorError',
    color: '$colorError',
  },

  valid: {},

  focus: {
    backgroundColor: '$inputBackgroundColorFocus',
    borderColor: '$inputBorderColorFocus',
    zIndex: 1,
  },

  // align
  left: {
    textAlign: 'left',
  },

  center: {
    textAlign: 'center',
  },

  right: {
    textAlign: 'right',
  },
});
