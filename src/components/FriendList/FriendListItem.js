import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImg from '../../images/defaultImg.png';

function FriendListItem({
  avatar = defaultImg,
  name = 'Anonymous',
  isOnline = false,
}) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
