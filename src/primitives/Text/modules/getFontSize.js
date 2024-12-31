import StyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  title: {
    fontSize: '$fontSizeTitle',
    lineHeight: '$fontSizeTitle * $lineHeightDefaultRatio',
  },

  subtitle: {
    fontSize: '$fontSizeSubtitle',
    lineHeight: '$fontSizeSubtitle * $lineHeightDefaultRatio',
  },

  body: {
    fontSize: '$fontSizeBody',
    lineHeight: '$fontSizeBody * $lineHeightBodyRatio',
  },

  caption: {
    fontSize: '$fontSizeCaption',
    lineHeight: '$fontSizeCaption * $lineHeightDefaultRatio',
  },

  tiny: {
    fontSize: '$fontSizeTiny',
    lineHeight: '$fontSizeTiny * $lineHeightDefaultRatio',
  },
});

export const getFontSize = ({ title, subtitle, caption, tiny }) =>
  title ? style.title : subtitle ? style.subtitle : caption ? style.caption : tiny ? style.tiny : style.body;
