import PropTypes from 'prop-types';
import React from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { style } from './Setting.style';
import { Card, Tabs } from '../../components';
import { Activity, Icon, Pressable, Text, View } from '../../primitives';

const Setting = ({
  activity = false,
  caption,
  color,
  disabled,
  icon,
  iconColor,
  options,
  selected,
  text,
  onChange,
  onPress,
} = {}) => (
  <Pressable onPress={onPress && !disabled && !activity ? onPress : undefined}>
    <View gap row>
      {icon && (
        <Card
          small
          style={{
            backgroundColor: disabled ? StyleSheet.value('$colorBorder') : color || StyleSheet.value('$colorAccent'),
            width: 'auto',
          }}
        >
          <Icon color={iconColor} name={icon} />
        </Card>
      )}
      <View row style={style.content}>
        <View flex>
          <Text color={disabled ? 'contentLight' : undefined}>{text}</Text>
          {caption && (
            <Text caption color="contentLight">
              {caption}
            </Text>
          )}
        </View>

        {activity ? (
          <Activity size="small" color={StyleSheet.value('$colorContent')} />
        ) : options ? (
          <Tabs {...{ selected, options, onChange }} />
        ) : onPress ? (
          <Icon name="chevron-right" />
        ) : (
          <></>
        )}
      </View>
    </View>
  </Pressable>
);

Setting.displayName = 'Setting';

Setting.propTypes = {
  activity: PropTypes.bool,
  caption: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  selected: PropTypes.number,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
};

export { Setting };
