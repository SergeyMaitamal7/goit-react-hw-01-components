import PropTypes from 'prop-types';
import { ucFirst } from './Profile.stiled';
import {
  Avatar,
  Description,
  PersonalInfo,
  ProfileContainer,
  SociaNetworcStats,
  Stats,
  StatsItem,
} from './Profile.stiled';
export const Profile = ({ profile }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={profile.avatar} alt={profile.username} />
        <PersonalInfo color={1}>{ucFirst(profile.username)}</PersonalInfo>
        <PersonalInfo> {profile.tag}</PersonalInfo>
        <PersonalInfo>{profile.location}</PersonalInfo>
      </Description>
      <Stats>
        <StatsItem>
          <SociaNetworcStats>Followers</SociaNetworcStats>
          <SociaNetworcStats color={1}>
            {profile.stats.followers}
          </SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>Views</SociaNetworcStats>
          <SociaNetworcStats color={1}>{profile.stats.views}</SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>Likes</SociaNetworcStats>
          <SociaNetworcStats color={1}>{profile.stats.likes}</SociaNetworcStats>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

// Profile.propTypes = {
//   profile: PropTypes.objectOf(
//     PropTypes.exact({
//       username: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };


Profile.propTypes = {user: PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
})};


