import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image as BaseImage, Platform } from 'react-native';

import { style } from './Image.style';
import { Activity, View } from '../../primitives';

const Image = ({ activityColor, activitySize = 'small', ...others }) => {
  const [busy, setBusy] = useState(true);

  const handleLoadStart = () => {
    setBusy(true);
  };

  const handleLoad = () => {
    setBusy(false);
  };

  const handleLoadEnd = () => {
    setBusy(false);
  };

  const handleError = () => {
    setBusy(false);
  };

  const getActivityStyle = () => {
    const offset = activitySize === 'large' ? -18 : -10;
    return {
      ...style.activity,
      transform: [{ translateX: offset }, { translateY: offset }],
    };
  };

  return (
    <View style={[style.container, others.style]}>
      <BaseImage
        {...others}
        onError={handleError}
        onLoad={handleLoad}
        onLoadEnd={handleLoadEnd}
        onLoadStart={handleLoadStart}
        style={style.image}
      />
      {busy && Platform.OS !== 'web' && (
        <Activity color={activityColor} size={activitySize} style={getActivityStyle()} />
      )}
    </View>
  );
};

Image.displayName = 'Image';

Image.propTypes = {
  activityColor: PropTypes.string,
  activitySize: PropTypes.oneOf(['small', 'large']),
};

export { Image };
