import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = { friends: PropTypes.array.isRequired };

export default FriendList;
