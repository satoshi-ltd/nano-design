import PropTypes from 'prop-types';
import React from 'react';

import { style } from './Menu.style';
import { Icon, Pressable, Text, View } from '../../primitives';
import { Modal } from '../Modal';

const Menu = ({ options = [], onClose = () => {} }) => (
  <Modal gap onClose={onClose} style={style.modal}>
    {options.map(({ critical = false, disabled = false, icon, text, onPress = () => {} } = {}, index) => (
      <Pressable
        key={`menu-option-${index}`}
        onPress={
          !disabled
            ? () => {
                onClose();
                onPress();
              }
            : undefined
        }
      >
        <View gap row style={[critical && style.critical]}>
          <Text color={critical ? 'error' : disabled ? 'disabled' : undefined}>{text}</Text>
          <View flex />
          <Icon color={critical ? 'error' : disabled ? 'disabled' : undefined} name={icon} />
        </View>
      </Pressable>
    ))}
  </Modal>
);

Menu.displayName = 'Menu';

Menu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      critical: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      text: PropTypes.string,
      onPress: PropTypes.func,
    }),
  ),
  onClose: PropTypes.func,
};

export { Menu };
