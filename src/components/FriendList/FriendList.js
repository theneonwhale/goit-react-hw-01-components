import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}

// Statictics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default FriendList;
