import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { style } from './Confirm.style';
import { Button } from '../../components';
import { Text, View } from '../../primitives';

const Confirm = ({
  accept = 'Accept',
  buttonProps = { secondary: true },
  cancel = 'Cancel',
  caption,
  children,
  title,
  onAccept = () => {},
  onCancel,
  ...others
}) => (
  <View style={style.overflow}>
    <SafeAreaView>
      <View {...others} style={[style.content, others.style]}>
        {title && (
          <Text bold color="base" subtitle>
            {title}
          </Text>
        )}

        {caption && <Text color={title ? 'contentLight' : undefined}>{caption}</Text>}

        {children}

        <View row style={style.buttons}>
          {onCancel && (
            <Button {...buttonProps} flex onPress={onCancel}>
              {cancel}
            </Button>
          )}

          <Button {...buttonProps} flex onPress={onAccept}>
            {accept}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  </View>
);

Confirm.displayName = 'Confirm';

Confirm.propTypes = {
  accept: PropTypes.string,
  buttonProps: PropTypes.shape({}),
  cancel: PropTypes.string,
  caption: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
};

export { Confirm };
