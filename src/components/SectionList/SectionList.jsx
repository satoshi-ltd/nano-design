import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SectionList as BaseSectionList } from 'react-native';

import { style } from './SectionList.style';
import { Input } from '../../primitives';
import { Action } from '../Action';
import { Heading } from '../Heading';

const SectionList = ({
  closeLabel,
  data,
  keyExtractor,
  querySearchData,
  renderItem,
  renderSectionHeader,
  searchLabel,
  title,
}) => {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(2);

  const handleSearch = () => {
    setSearch(() => {
      setQuery(undefined);
      return !search;
    });
  };

  return (
    <>
      {data.length > 0 && (
        <>
          <Heading value={title}>
            <Action caption color="content" onPress={handleSearch}>
              {!search ? searchLabel || 'Search' : closeLabel || 'Close'}
            </Action>
          </Heading>
          {search && (
            <Input
              autoFocus
              placeholder={`${searchLabel || 'Search'}...`}
              value={query}
              onChange={setQuery}
              style={style.inputSearch}
            />
          )}
          <BaseSectionList
            sections={querySearchData({ query, page }) || data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            initialNumToRender={20}
            onEndReached={() => setPage(page + 1)}
            style={[style.sectionList]}
          />
        </>
      )}
    </>
  );
};

SectionList.propTypes = {
  closeLabel: PropTypes.string,
  data: PropTypes.array,
  keyExtractor: PropTypes.func,
  querySearchData: PropTypes.func,
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  searchLabel: PropTypes.string,
  title: PropTypes.string,
};

export { SectionList };
