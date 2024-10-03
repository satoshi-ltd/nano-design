import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import { style } from './Input.style';

const Input = React.forwardRef(
  (
    {
      align,
      disabled = false,
      error = false,
      keyboard = 'text',
      placeholder,
      valid = false,
      value = '',
      onChange,
      ...others
    },
    ref,
  ) => {
    const [rows, setRows] = useState(1);
    const [focus, setFocus] = useState(false);

    const handleChange = (next = '') => {
      onChange && onChange(next.toString().length > 0 ? next : undefined);
    };

    const handleContentSizeChange = ({ nativeEvent: { contentSize: { height } = {} } = {} }) => {
      const spaceM = StyleSheet.value('$spaceM');
      const fontSize = StyleSheet.value('$inputFontSize');

      setRows(Math.floor(height / (fontSize + spaceM)) + 1);
    };

    return (
      <TextInput
        {...others}
        editable={!disabled}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        blurOnSubmit
        inputMode={keyboard}
        placeholder={!focus ? placeholder : undefined}
        placeholderTextColor={StyleSheet.value('$inputPlaceholderColor')}
        ref={ref}
        rows={rows}
        textAlignVertical={!others.multiline ? 'center' : others.textAlignVertical}
        underlineColorAndroid="transparent"
        value={value?.toString()}
        onBlur={() => setFocus(false)}
        onChangeText={handleChange}
        onContentSizeChange={others.multiline && value?.length ? handleContentSizeChange : undefined}
        onFocus={() => setFocus(true)}
        onSubmitEditing={Keyboard.dismiss}
        style={[
          style.input,
          align && style[align],
          disabled
            ? style.disabled
            : focus || !!value
            ? style.focus
            : error
            ? style.error
            : valid
            ? style.valid
            : undefined,
          others.style,
        ]}
      />
    );
  },
);

Input.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.string,
  keyboard: PropTypes.string,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { Input };
