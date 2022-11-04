/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export function DogListItem(props) {
  const { item } = props;

  const content = (
    <Wrapper>
      <h3>{item.name}</h3>
      <img
        alt={item.name}
        src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
      />
    </Wrapper>
  );

  return <ListItem key="dog-list-item" item={content} />;
}

DogListItem.propTypes = {
  item: PropTypes.object,
};

export default connect()(DogListItem);
