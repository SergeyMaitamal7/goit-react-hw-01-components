import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendListStile } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListStile>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListStile>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
