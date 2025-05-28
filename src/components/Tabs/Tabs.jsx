import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { style } from './Tabs.style';
import { Icon, Pressable, Text, View } from '../../primitives';

const Tabs = ({
  caption = false,
  color,
  disabled = false,
  options = [],
  secondary = false,
  selected: propSelected,
  tiny = true,
  onChange,
  ...others
}) => {
  const [selected, setSelected] = useState(propSelected);

  useEffect(() => {
    setSelected(propSelected);
  }, [propSelected]);

  const handlePress = (index) => {
    setSelected(index);
    onChange(options[index]);
  };

  return (
    <View {...others} row style={[style.container, others.style]}>
      {options.map(({ icon, text }, index) => {
        const isSelected = selected === index;

        const textProps = {
          color,
          style: [isSelected ? (secondary ? style.textSecondaryActive : style.textActive) : style.text],
        };

        return (
          <Pressable
            disabled={disabled}
            key={`tab:${text || icon}`}
            onPress={() => handlePress(index)}
            style={[style.item, isSelected && (secondary ? style.secondaryActive : style.active)]}
          >
            {icon && <Icon color={color} name={icon} {...textProps} />}

            {text && (
              <Text bold {...{ caption, tiny }} {...textProps}>
                {text}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

Tabs.propTypes = {
  caption: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  secondary: PropTypes.bool,
  selected: PropTypes.number,
  tiny: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Tabs };
