import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { style } from './Tabs.style';
import { Icon, Pressable, Text, View } from '../../primitives';

const Tabs = ({
  accent = false,
  caption = false,
  color: propColor,
  disabled = false,
  options = [],
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
        const color = propColor || selected === index ? (accent ? 'content' : 'base') : 'contentLight';

        return (
          <Pressable
            disabled={disabled}
            key={`tab:${text || icon}`}
            onPress={() => handlePress(index)}
            style={[style.item, selected === index && style.active, selected === index && accent && style.accent]}
          >
            {icon && <Icon color={color} name={icon} />}

            {text && (
              <Text bold {...{ caption, tiny }} color={color}>
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
  accent: PropTypes.bool,
  caption: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  selected: PropTypes.number,
  tiny: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Tabs };
