import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const getBgColor = isOnline => (isOnline ? 'green' : 'red');
const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={css.status}
      style={{ backgroundColor: getBgColor(isOnline) }}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
