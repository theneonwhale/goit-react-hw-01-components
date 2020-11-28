import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImg from '../../images/defaultImg.png';

function FriendListItem({ friends }) {
  return friends.map(
    ({ avatar = defaultImg, name = 'Anonymous', isOnline = false, id }) => (
      <li className={s.item} key={id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    ),
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendListItem;
