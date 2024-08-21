import PropTypes from 'prop-types';
import React from 'react';
import { SectionList as BaseSectionList } from 'react-native';

const SectionList = ({ data, keyExtractor, onEndReached, refreshing, renderItem, renderSectionHeader, style }) => (
  <BaseSectionList
    initialNumToRender={20}
    keyExtractor={keyExtractor}
    onEndReached={onEndReached}
    refreshing={refreshing}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    sections={data}
    style={style}
  />
);

SectionList.propTypes = {
  data: PropTypes.array,
  keyExtractor: PropTypes.func,
  onEndReached: PropTypes.func,
  refreshing: PropTypes.bool,
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  style: PropTypes.any,
};

export { SectionList };
