import PropTypes from 'prop-types';
import React from 'react';
import { SectionList as BaseSectionList } from 'react-native';

const SectionList = ({
  dataSource,
  initialItemsToRender = 16,
  keyExtractor,
  refreshing,
  renderItem,
  renderSectionHeader,
  onEndReached,
  ...others
}) => (
  <BaseSectionList
    {...others}
    {...{ keyExtractor, refreshing, renderItem, renderSectionHeader }}
    initialNumToRender={initialItemsToRender}
    sections={dataSource}
    onEndReached={onEndReached}
    style={others.style}
  />
);

SectionList.propTypes = {
  dataSource: PropTypes.array,
  initialItemsToRender: PropTypes.func,
  keyExtractor: PropTypes.func,
  refreshing: PropTypes.bool,
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  onEndReached: PropTypes.func,
};

export { SectionList };
