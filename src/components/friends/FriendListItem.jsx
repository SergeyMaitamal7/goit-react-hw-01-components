import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status isOnline={isOnline}> {isOnline} </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name> {name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
