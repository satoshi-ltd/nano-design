/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from 'prop-types';
import React from 'react';
import { Text as BaseText } from 'react-native';

import { getColor, getFontSize } from './modules';
import { style } from './Text.style';

const Text = ({
  accentuate = false,
  align,
  bold,
  children,
  color = 'content',
  ellipsizeMode,
  secondary = false,
  // -- size
  title,
  subtitle,
  caption,
  tiny,
  ...others
}) => (
  <BaseText
    {...others}
    allowFontScaling={false}
    numberOfLines={ellipsizeMode ? 1 : others.numberOfLines}
    style={[
      !secondary ? style.text : style.textSecondary,
      getColor(color),
      getFontSize({ title, subtitle, caption, tiny }),
      bold ? (!secondary ? style.bold : style.boldSecondary) : undefined,
      align && style[align],
      bold && style.bold,
      others.style,
    ]}
  >
    {children}
  </BaseText>
);

Text.displayName = 'Text';

Text.propTypes = {
  accentuate: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  bold: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string,
  ellipsizeMode: PropTypes.bool,
  secondary: PropTypes.bool,
  // -- size
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  caption: PropTypes.bool,
  tiny: PropTypes.bool,
};

export { Text };
