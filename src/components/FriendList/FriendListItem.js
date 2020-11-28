import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li class="item" key={id}>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  ));
}

export default FriendListItem;
